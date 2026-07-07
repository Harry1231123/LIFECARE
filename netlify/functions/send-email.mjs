// Netlify Function: sends contact & booking enquiries via Resend.
// Requires two environment variables set in Netlify:
//   RESEND_API_KEY  — your Resend API key
//   TO_EMAIL        — where enquiries should be delivered (e.g. LifeCareTraining@Outlook.Com)
// Optional:
//   FROM_EMAIL      — a verified sender on your Resend domain
//                     (defaults to Resend's onboarding address for first-time testing)

const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.TO_EMAIL || 'LifeCareTraining@Outlook.Com'
  const fromEmail = process.env.FROM_EMAIL || 'LifeCare Training <onboarding@resend.dev>'

  if (!apiKey) {
    return Response.json({ error: 'Email is not configured yet.' }, { status: 500 })
  }

  let data
  try {
    data = await req.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: silently accept bot submissions without sending.
  if (data['bot-field']) {
    return Response.json({ ok: true })
  }

  const formType = data.formType === 'booking' ? 'Booking / Quote Request' : 'Contact Enquiry'

  // Build the email body from whatever fields were submitted (skip internal ones).
  const skip = new Set(['bot-field', 'formType'])
  const rows = Object.entries(data)
    .filter(([k, v]) => !skip.has(k) && v != null && String(v).trim() !== '')
    .map(
      ([k, v]) =>
        `<tr>
           <td style="padding:6px 12px;font-weight:600;color:#111827;vertical-align:top;text-transform:capitalize;">${escapeHtml(k)}</td>
           <td style="padding:6px 12px;color:#374151;">${escapeHtml(v).replace(/\n/g, '<br>')}</td>
         </tr>`
    )
    .join('')

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#D24A25;margin-bottom:4px;">New ${escapeHtml(formType)}</h2>
      <p style="color:#6b7280;margin-top:0;">Submitted via lifecaretraining.co.uk</p>
      <table style="border-collapse:collapse;width:100%;background:#f9fafb;border-radius:8px;overflow:hidden;">
        ${rows}
      </table>
    </div>`

  // Only set reply-to when the submitter gave a valid-looking email,
  // otherwise Resend rejects the whole send with a 422.
  const isEmail = (v) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
  const replyTo = isEmail(data.email) ? data.email.trim() : undefined

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject: `${formType}${data.name ? ` — ${data.name}` : ''}`,
        html,
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error('Resend API error', res.status, detail)
      return Response.json({ error: 'Could not send email.', detail }, { status: 502 })
    }

    console.log('Email sent OK to', toEmail)
    return Response.json({ ok: true })
  } catch (err) {
    console.error('send-email failed', err)
    return Response.json({ error: 'Could not send email.', detail: String(err) }, { status: 502 })
  }
}
