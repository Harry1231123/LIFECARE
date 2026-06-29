import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react'
import Reveal from '../components/Reveal'

const CATEGORY_STYLE = {
  'Legal Compliance': 'bg-dark text-white',
  'Mental Health':    'bg-emerald-600 text-white',
  'Training Advice':  'bg-brand text-white',
  'Events':           'bg-amber-500 text-white',
}

const POSTS = [
  {
    slug: 'saving-lives-is-not-enough',
    category: 'Training Advice',
    title: '#SavingLivesIsNotEnough: Pre-Hospital Management of Paediatric Burns',
    excerpt: 'A clinical case study from the frontline. A 12-year-old girl. A chip pan fire. And a simple intervention, cool running water, that can be the difference between a full recovery and a lifetime of scarring.',
    date: '11 Mar 2026',
    readTime: '6 min',
    image: '/assets/hero.webp',
    content: [
      { type: 'intro', text: "Saving a life is not enough. That's the principle behind #SavingLivesIsNotEnough, a way of thinking that asks more of us than the basics of emergency response. It asks us to consider not just survival, but outcome. Not just whether the patient lived, but how well they lived afterwards. This case study is about burns. It's about a twelve-year-old girl, a domestic chip pan fire, and an intervention so simple it can be done in any home, yet so frequently delayed that thousands of patients suffer worse outcomes every year than they should." },
      { type: 'h2', text: 'The Incident' },
      { type: 'p', text: "A 12-year-old girl attempted to move a burning oil pan from the hob to the kitchen sink. As she lifted it, the hot oil sloshed violently, splattering across her upper torso and both legs. The pan was also on fire. She sustained mixed thermal and scald injuries across a significant percentage of her body surface area." },
      { type: 'p', text: "When paramedics arrived, they conducted an ABCDE primary survey. Her airway was patent but assessment revealed early signs of smoke inhalation, a consequence of the burning oil in an enclosed kitchen. Her breathing was compromised. Circulation was being maintained. The extent of her burns required immediate, careful management before transport." },
      { type: 'h2', text: 'The Critical Intervention: Cool Running Water' },
      { type: 'p', text: "The most important first aid intervention for a burn is also the simplest: cool running water, applied as soon as possible, for as long as appropriate. NICE guidelines and the British Burns Association recommend 20 minutes of cool (not cold) running water, ideally initiated within three hours of the injury." },
      { type: 'p', text: "In this case, the crew applied cool running water for approximately 15 minutes rather than the full 20. This was a deliberate clinical decision, not a shortcut. In a paediatric patient, the risk of hypothermia is a genuine competing concern. Children have a higher body surface area to mass ratio than adults, meaning they lose heat significantly faster. The crew balanced the benefit of continued cooling against the emerging risk of a dangerous drop in core temperature." },
      { type: 'callout', text: '"Cool the burn, warm the patient." This is not a slogan. It is a clinical principle. Cooling the burn and preventing systemic hypothermia are both active goals. They must be managed simultaneously.' },
      { type: 'h2', text: 'Assessing the Extent: The Mersey Burns App' },
      { type: 'p', text: "Accurate assessment of the total body surface area (TBSA) affected by burns is essential for determining fluid resuscitation requirements, transport decisions, and hospital destination. The traditional tool for this is the Lund and Browder chart, a body diagram that accounts for the different proportions of body segments at different ages, making it more accurate than the simpler Rule of Nines (which is not appropriate for children)." },
      { type: 'p', text: "The crew used the Mersey Burns App, a validated digital tool based on the Lund and Browder model. It allows clinicians to rapidly map burn distribution on an age-adjusted body diagram, automatically calculates TBSA percentage, and generates fluid resuscitation guidance in real time. Using digital tools like this in the pre-hospital environment reduces calculation errors under pressure and ensures hospital teams receive accurate handover data before arrival." },
      { type: 'h2', text: 'Why Early Cooling Changes Everything' },
      { type: 'p', text: "The evidence base for early burn cooling is unambiguous. Cooling within three hours of injury, with the optimal window being within one hour, produces measurable, clinically significant improvements in outcome:" },
      { type: 'ul', items: [
        'Reduces burn depth: partial thickness burns can progress to full thickness without adequate cooling, but early cooling arrests that progression',
        'Accelerates healing: cooled burns re-epithelialise faster because the local inflammatory cascade is moderated',
        'Minimises scarring: shallower burns leave less scarring, and preventing depth progression directly reduces long-term cosmetic and functional impact',
        'Can eliminate the need for surgical grafting: burns that might otherwise require skin grafting may heal spontaneously if depth progression is prevented through early, effective cooling',
      ]},
      { type: 'p', text: "For a 12-year-old girl whose burns covered her torso and both legs, those outcomes are not abstract statistics. They are the difference between a childhood marked by reconstructive surgery, visible scarring, and long-term physiotherapy, or one where a traumatic incident heals, closes, and becomes part of the past rather than the present." },
      { type: 'h2', text: 'What First Aiders Need to Know' },
      { type: 'p', text: "Most burns in the UK occur in the home. Most of the people present when a burn occurs are not paramedics. They are parents, siblings, housemates, colleagues. The intervention that makes the most difference to outcome happens in the first minutes, long before any emergency service arrives." },
      { type: 'ul', items: [
        'Remove the heat source and get the patient away from danger first',
        'Start cool (not cold, not iced) running water immediately. Tap water is correct.',
        'Aim for 20 minutes. Set a timer, because people consistently underestimate the time elapsed.',
        'Cover with cling film loosely after cooling, never before, as it traps heat',
        'Do not use butter, toothpaste, ice, or any home remedy. These cause harm.',
        'In children or the elderly, monitor for hypothermia and keep the rest of the body warm',
        'Call 999 for burns larger than a palm, burns on the face, hands, feet, or genitals, or any burn in a child under 5',
      ]},
      { type: 'h2', text: 'Saving Lives Is Not Enough' },
      { type: 'p', text: "The #SavingLivesIsNotEnough movement is about raising the standard. It is about the difference between a first aider who keeps someone alive until the ambulance arrives, and a first aider who, through knowledge, through training, through timely action, changes what the rest of that person's life looks like." },
      { type: 'p', text: "This case is a burns case. But the principle applies everywhere. Early recognition of stroke symptoms doesn't just save lives. It changes the extent of brain damage. Early defibrillation doesn't just restart hearts. It determines neurological outcome. Early cooling of burns doesn't just prevent immediate deterioration. It writes the difference between scarring and recovery into the skin of a twelve-year-old girl." },
      { type: 'p', text: "Train better. Act sooner. Expect more of yourself and of first aid. Because saving lives is not enough." },
    ],
  },
  {
    slug: 'business-legally-required-first-aider',
    category: 'Legal Compliance',
    title: 'Is Your Business Legally Required to Have a Qualified First Aider?',
    excerpt: "The Health and Safety (First-Aid) Regulations 1981 require every employer to make adequate first aid provision. But what does 'adequate' actually mean, and what happens if you don't comply?",
    date: '12 May 2025',
    readTime: '5 min',
    image: '/assets/equipment.webp',
    content: [
      { type: 'intro', text: "The short answer is yes, almost certainly. The Health and Safety (First-Aid) Regulations 1981 place a clear legal duty on every employer in Great Britain to make adequate first aid provision for their employees. But 'adequate' isn't a fixed number or a single qualification. It depends on your workplace, and getting it wrong can be costly." },
      { type: 'h2', text: 'What the Law Actually Requires' },
      { type: 'p', text: "The Regulations require employers to provide: adequate and appropriate equipment and facilities for giving first aid to employees if they are injured or become ill at work; and an adequate number of suitable persons to provide first aid. That last clause, 'suitable persons', is where most businesses focus their attention, because it's the part that requires trained first aiders." },
      { type: 'p', text: "The Regulations are underpinned by HSE guidance document L74, which was last revised in 2023. L74 is the definitive reference for employers trying to understand what 'adequate' means in practice for their specific workplace." },
      { type: 'h2', text: 'The First Aid Needs Assessment' },
      { type: 'p', text: "Your legal obligation doesn't start with booking a training course. It starts with a First Aid Needs Assessment. This is a documented review of your workplace that considers:" },
      { type: 'ul', items: [
        'The nature of the work and the hazards involved',
        'The size of your workforce and where they are located',
        'The history of accidents and ill-health in your workplace',
        'Whether employees work in remote locations or lone-work situations',
        'Whether the public are present and whether you have a duty of care to them',
        'The proximity to emergency services and the time it would take an ambulance to reach you',
      ]},
      { type: 'p', text: "The assessment determines what level of first aid provision is appropriate. For a small, low-risk office of ten people, this might mean a trained Appointed Person and a stocked first aid kit. For a 200-person manufacturing site with machinery hazards, it almost certainly means multiple trained first aiders at all times." },
      { type: 'h2', text: 'The Three Levels of First Aid Provision' },
      { type: 'p', text: "HSE guidance sets out three tiers of provision:" },
      { type: 'ul', items: [
        "Appointed Person: someone designated to take charge in an emergency. They don't hold a formal first aid qualification, but they must ensure the first aid box is stocked and liaise with emergency services. This is the minimum for very small, low-hazard workplaces.",
        "Emergency First Aid at Work (EFAW): a one-day Ofqual-regulated qualification covering the core life-threatening emergencies: CPR, severe bleeding, choking, and management of an unconscious casualty. Appropriate for most low-to-medium risk workplaces.",
        "First Aid at Work (FAW): a three-day comprehensive qualification required for higher-risk workplaces or larger organisations. Covers everything in EFAW plus a significantly wider range of medical emergencies and injuries.",
      ]},
      { type: 'callout', text: "Important: First aid qualifications must be renewed every three years. An expired certificate does not count as valid provision. You are effectively operating without a first aider from the day it lapses." },
      { type: 'h2', text: 'Does the Law Cover Employees Only?' },
      { type: 'p', text: "Technically, the 1981 Regulations only create a duty of care towards employees. However, under the Health and Safety at Work etc. Act 1974, employers also have a general duty of care towards non-employees, including members of the public, contractors, and customers, who may be affected by their work activities. In practice, this means most businesses should factor public presence into their needs assessment." },
      { type: 'p', text: "Self-employed individuals also have a responsibility under the Regulations to provide adequate first aid for themselves, though the requirements are proportionate to the risk involved in their work." },
      { type: 'h2', text: 'What Happens If You Don\'t Comply?' },
      { type: 'p', text: "Non-compliance with the First-Aid Regulations is a criminal offence under the Health and Safety at Work etc. Act 1974. The HSE has powers to issue Improvement Notices requiring you to address deficiencies within a set timeframe, and in serious cases, to prosecute. Since the Sentencing Guidelines were revised in 2016, fines for health and safety offences are linked to company turnover, meaning large organisations can face fines running into millions of pounds." },
      { type: 'p', text: "Beyond the legal risk, there is also the Fee for Intervention scheme: if an HSE inspector visits and finds a material breach, they can charge you for the time spent investigating at a current rate of over £198 per hour. The cost of non-compliance almost always exceeds the cost of getting properly trained." },
      { type: 'h2', text: 'The Bottom Line' },
      { type: 'p', text: "Every employer must complete a First Aid Needs Assessment and act on it. For most businesses, that means at least one person trained to EFAW standard and a stocked first aid kit. For higher-risk or larger workplaces, the requirements are greater. The starting point isn't a training course. It's understanding what your workplace actually needs." },
    ],
  },
  {
    slug: 'hse-first-aid-regulations-guide',
    category: 'Legal Compliance',
    title: 'The HSE First Aid Regulations: A Plain-English Guide for Employers',
    excerpt: "The legislation is over 40 years old but it's more relevant than ever. We break down exactly what the Regulations require, and what the penalties are for non-compliance.",
    date: '28 Apr 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    content: [
      { type: 'intro', text: "The Health and Safety (First-Aid) Regulations 1981 have been in force for over four decades, but many employers still don't fully understand what they require. This guide cuts through the legal language and tells you exactly what you need to do, who it applies to, and what the consequences are for getting it wrong." },
      { type: 'h2', text: 'Who Do the Regulations Apply To?' },
      { type: 'p', text: "The Regulations apply to every employer in Great Britain, regardless of the size or type of business. There are no exemptions based on the number of employees, the nature of the work, or whether the business operates from a fixed location. A sole trader with one part-time employee is covered. A multinational with ten thousand staff is covered. The scale of your obligations differs but the obligation itself does not." },
      { type: 'h2', text: 'The Core Legal Duties' },
      { type: 'p', text: "Under Regulation 3, every employer must:" },
      { type: 'ul', items: [
        'Provide, or ensure that there are provided, such equipment and facilities as are adequate and appropriate in the circumstances for enabling first aid to be rendered to employees who are injured or become ill at work',
        'Provide, or ensure that there are provided, such number of suitable persons as is adequate and appropriate in the circumstances for rendering first aid to employees who are injured or become ill at work',
        'Inform employees of the arrangements that have been made in connection with the provision of first aid, including the location of equipment, facilities and personnel',
      ]},
      { type: 'p', text: "That third duty, informing employees, is one of the most commonly overlooked. It's not enough to have a trained first aider if nobody knows who they are or where the first aid kit is kept." },
      { type: 'h2', text: 'What Is a \'Suitable Person\'?' },
      { type: 'p', text: "A 'suitable person' means someone who has received training and has a qualification appropriate to the circumstances. For most workplaces, this means holding a current Emergency First Aid at Work (EFAW) or First Aid at Work (FAW) certificate from an HSE-compliant training provider delivering an Ofqual-regulated qualification." },
      { type: 'p', text: "Qualifications are valid for three years. After that, they must be renewed. An employer cannot continue to count an expired certificate as valid provision, even if the person still remembers their training. Renewals must take place before the expiry date, not after." },
      { type: 'h2', text: 'How Many First Aiders Do You Need?' },
      { type: 'p', text: "There is no single statutory ratio of first aiders to employees. The number required depends on your First Aid Needs Assessment. However, HSE guidance in L74 provides indicative benchmarks:" },
      { type: 'ul', items: [
        'Low-hazard workplaces (offices, shops): fewer than 25 employees, an Appointed Person may suffice. 25–50 employees, at least one EFAW-qualified first aider. Over 50 employees, one first aider per 100 employees.',
        'Higher-hazard workplaces (construction, manufacturing, warehousing): fewer than 5 employees, at least one EFAW-qualified first aider. 5–50 employees, at least one FAW-qualified first aider. Over 50 employees, one FAW-qualified first aider per 50 employees.',
        'These are minimum benchmarks, not fixed rules. Your needs assessment may determine you need more.',
      ]},
      { type: 'callout', text: "L74 guidance is clear: if your lone first aider is absent, whether on holiday, off sick, or on a different shift, you must have arrangements in place to cover their absence. This often means training additional personnel." },
      { type: 'h2', text: 'First Aid Kits: What Must They Contain?' },
      { type: 'p', text: "There is no statutory list of items that must be in a first aid kit. However, HSE guidance recommends a minimum kit for a low-hazard workplace should include: individually wrapped sterile plasters, sterile eye pads, triangular bandages, safety pins, medium and large sterile wound dressings, disposable gloves, and guidance leaflets. The kit should be clearly identified by a white cross on a green background." },
      { type: 'p', text: "Medications, including aspirin, must not be included in a first aid kit provided under these Regulations. There is an important distinction between first aid provision and the dispensing of medication." },
      { type: 'h2', text: 'The Fee for Intervention Scheme' },
      { type: 'p', text: "Since 2012, the HSE has operated the Fee for Intervention (FFI) scheme. Under this scheme, if an HSE inspector identifies a material breach of health and safety law during an inspection, the duty holder is charged for the HSE's time at the current rate (£198/hour as of 2024/25). A single inspection resulting in a first aid compliance issue can therefore generate a bill of several hundred pounds before any enforcement action is considered." },
      { type: 'h2', text: 'Getting It Right' },
      { type: 'p', text: "Compliance starts with a documented First Aid Needs Assessment. From that assessment, you determine the right number of trained first aiders, ensure their qualifications are current, stock the appropriate first aid kit, and inform all employees of the arrangements. It is not a one-time exercise. Your assessment should be reviewed whenever anything material changes in your workplace." },
    ],
  },
  {
    slug: 'mental-health-workplace-law-2025',
    category: 'Mental Health',
    title: 'Mental Health at Work: What the Law Actually Says in 2025',
    excerpt: "Mental health first aid is no longer just best practice. Here's what current HSE guidance means for your organisation, and how to protect yourself.",
    date: '3 Apr 2025',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1200&q=80',
    content: [
      { type: 'intro', text: "There is a lot of confusion, and some deliberate misinformation, circulating about mental health first aid and what the law requires. This article sets out the actual legal position as of 2025, distinguishes between legal duty and best practice, and explains why the distinction matters for your organisation." },
      { type: 'h2', text: 'Is Mental Health First Aid Training Legally Required?' },
      { type: 'p', text: "As of 2025, there is no specific legal requirement for employers to provide Mental Health First Aid (MHFA) training. The Mental Health First Aid (Minimum Standards) Bill, which would have created such a requirement, has not yet passed into law despite multiple readings in Parliament." },
      { type: 'p', text: "However, and this is the critical point, the absence of a specific MHFA requirement does not mean employers have no legal duties around mental health. They do. Those duties arise from existing legislation, and they are significant." },
      { type: 'h2', text: 'The Legal Duties That Do Exist' },
      { type: 'p', text: "Several pieces of existing legislation create enforceable duties around mental health at work:" },
      { type: 'ul', items: [
        "Management of Health and Safety at Work Regulations 1999: Employers must carry out suitable and sufficient risk assessments covering all work-related risks, including psychosocial risks such as stress, burnout, and poor management practices. Where risks are identified, they must be controlled.",
        "Health and Safety at Work etc. Act 1974: Employers must ensure, so far as is reasonably practicable, the health, safety and welfare of all employees. 'Health' explicitly includes mental health.",
        "Equality Act 2010: Many mental health conditions, including depression, anxiety disorders, PTSD, and bipolar disorder, may constitute a disability under the Act. Employers must make reasonable adjustments and must not discriminate.",
        "Working Time Regulations 1998: Excessive working hours and failure to provide adequate rest periods can contribute to mental health deterioration. Enforcing rest break entitlements is a legal duty.",
      ]},
      { type: 'h2', text: 'The HSE\'s Work-Related Stress Management Standards' },
      { type: 'p', text: "The HSE has published Management Standards for work-related stress. While these are not legally binding in themselves, they represent the HSE's view of what good practice looks like and form the basis for what an inspector would expect to see. The six standard areas are: Demands, Control, Support, Relationships, Role, and Change." },
      { type: 'p', text: "An employer who has not considered these standards and has not assessed stress-related risks in their workplace may find it difficult to demonstrate they have met their duty under the 1999 Regulations if a claim or enforcement action arises." },
      { type: 'callout', text: "The HSE's position is clear: stress is a health and safety issue, not simply a personal or HR matter. It falls within the scope of your existing risk assessment duties, not outside them." },
      { type: 'h2', text: 'What Is MHFA and Why Does It Matter?' },
      { type: 'p', text: "Mental Health First Aid is a structured training programme accredited by MHFA England. It trains individuals to recognise the signs of mental health difficulties, provide initial support, and signpost to professional help. A Mental Health First Aider is not a therapist or counsellor. Their role is analogous to a physical first aider: initial response and appropriate escalation." },
      { type: 'p', text: "Although not currently mandated by law, MHFA training is increasingly referenced by employment tribunals, personal injury claims, and HSE inspectors as evidence of whether an employer took reasonable steps to address known mental health risks. In sectors with high stress prevalence, such as healthcare, education, emergency services, and hospitality, the absence of MHFA provision may be difficult to justify if a claim is brought." },
      { type: 'h2', text: 'Practical Steps for Employers' },
      { type: 'ul', items: [
        'Update your risk assessment to explicitly address psychosocial and stress-related risks',
        'Review your workload management, line management quality, and absence data for indicators of stress',
        'Ensure managers are trained to have supportive conversations about mental health',
        'Consider MHFA training, especially in higher-risk environments or for larger teams',
        'Have a clear signposting pathway to your EAP, occupational health service, or GP',
        'Document everything: your assessments, your control measures, and your training records',
      ]},
      { type: 'p', text: "The law may not yet require a named Mental Health First Aider in every workplace, but it already requires you to take mental health risks seriously. The direction of travel is clear." },
    ],
  },
  {
    slug: 'five-first-aid-mistakes',
    category: 'Training Advice',
    title: "5 First Aid Mistakes That Could Cost Lives: From an EMT Who's Seen Them",
    excerpt: 'From incorrect CPR depth to missing early signs of cardiac events, our frontline ambulance instructor shares the most common errors made under pressure.',
    date: '18 Mar 2025',
    readTime: '6 min',
    image: '/assets/hero.webp',
    content: [
      { type: 'intro', text: "I've been working as an ambulance technician for over 17 years. I've attended thousands of emergency calls. And after all those years on the road, I can tell you with certainty: most of the first aid mistakes that cost lives are not made by untrained bystanders. They're made by people who've had training but not enough of it, or not recently enough. Here are the five I see most often." },
      { type: 'h2', text: '1. Starting CPR Without Completing the Primary Survey' },
      { type: 'p', text: "The instinct when someone collapses is to immediately start CPR. I understand it. You want to help, the adrenaline kicks in, and CPR is the most visible, dramatic thing you can do. But starting CPR without first checking for Danger, confirming the casualty is unResponsive, shouting for help, opening the Airway, and checking for Breathing can lead to serious errors." },
      { type: 'p', text: "I've attended incidents where bystanders started CPR on someone who was breathing but unconscious, such as a diabetic emergency, a seizure postictal phase, or a stroke. Starting chest compressions on a person who is breathing can cause significant internal injury. The primary survey takes less than ten seconds. It cannot be skipped." },
      { type: 'h2', text: '2. Incorrect CPR Technique: Specifically Compression Depth' },
      { type: 'p', text: "This one is universal. Almost everyone who hasn't practised on a manikin recently compresses too shallowly. The Resuscitation Council UK guidelines are clear: compress the chest 5–6cm deep at a rate of 100–120 compressions per minute, with a 30:2 ratio of compressions to rescue breaths (or hands-only if you're untrained or unwilling to give breaths)." },
      { type: 'p', text: "Five to six centimetres is deeper than most people expect. On a real person, it takes significant force. People frequently compress 2–3cm and believe they're doing it correctly. This is why hands-on manikin practice is essential. You cannot build muscle memory from a classroom lecture or a YouTube video." },
      { type: 'callout', text: "Every minute without effective CPR and defibrillation reduces the chance of survival from cardiac arrest by approximately 10%. Effective technique isn't a detail. It's the difference between survival and death." },
      { type: 'h2', text: '3. Failing to Use the AED Immediately' },
      { type: 'p', text: "AEDs are now in shopping centres, train stations, gyms, schools, offices, and public places across the UK. They are designed to be used by bystanders with no medical training. They are extraordinarily safe: they will not deliver a shock unless a shockable rhythm is present." },
      { type: 'p', text: "Yet at call-outs where an AED was present and accessible, my crew regularly arrives to find it still in its cabinet. The most common reason? People were worried about using it incorrectly, or thought CPR alone was sufficient. In cardiac arrest caused by ventricular fibrillation, the most common initial rhythm, CPR alone can only buy time. Only defibrillation can restore a normal heart rhythm. If there's an AED, you use it. Immediately." },
      { type: 'h2', text: '4. Moving a Casualty with a Suspected Spinal Injury' },
      { type: 'p', text: "The guidance on spinal injury management has evolved, and there is now more emphasis on keeping the airway open than on strict spinal immobilisation by untrained bystanders. However, the core principle remains: if a casualty has been involved in a mechanism that could cause spinal injury, such as a fall from height, a road traffic collision, a diving accident, or a direct blow to the head or neck, do not unnecessarily move them." },
      { type: 'p', text: "I have attended incidents where well-meaning bystanders moved a casualty 'to make them more comfortable' or 'out of danger' in situations where the danger had passed and the movement was unnecessary. The exception is if the casualty is in immediate danger from fire, water, or structural collapse. In that case, you move them using the best technique available. Otherwise, you hold the head in a neutral position and wait for the ambulance." },
      { type: 'h2', text: '5. Leaving an Unconscious Casualty on Their Back' },
      { type: 'p', text: "An unconscious person who is breathing must be placed in the recovery position: on their side, with the mouth angled downward. This is one of the most important and most frequently neglected skills in basic first aid." },
      { type: 'p', text: "An unconscious casualty left lying on their back is at serious risk of aspirating vomit, blood, or secretions. The tongue can also fall back and obstruct the airway. Every year, people survive the initial emergency, whether a head injury, a seizure, or an overdose, only to die from airway obstruction because nobody placed them in the recovery position. It takes seconds. It saves lives." },
      { type: 'h2', text: 'The Common Thread' },
      { type: 'p', text: "What links all five of these mistakes? They are all errors made by people who have either never been properly trained, or who trained years ago and haven't refreshed. First aid skills decay rapidly without practice. The Resuscitation Council recommends CPR refreshers every 12 months. EFAW and FAW certificates are valid for three years, but the skills deteriorate long before the certificate expires." },
      { type: 'p', text: "The best investment you can make in your team's first aid capability isn't just the initial course. It's regular, hands-on practice with feedback from someone who knows what effective technique actually looks like under pressure." },
    ],
  },
  {
    slug: 'event-first-aid-cover-guide',
    category: 'Events',
    title: 'Community Events: How Much First Aid Cover Does Your Event Actually Need?',
    excerpt: "Every event organiser has a duty of care. But the required level of cover depends on your specific event, and here's how to assess it.",
    date: '5 Mar 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    content: [
      { type: 'intro', text: "Whether you're organising a 50-person charity quiz night or a 5,000-person outdoor festival, you have a legal duty of care to everyone who attends. But the level of first aid provision required is not fixed. It depends on a range of factors specific to your event. Here's how to think about it." },
      { type: 'h2', text: 'Your Legal Duty of Care' },
      { type: 'p', text: "Event organisers owe a duty of care to attendees under the Occupiers' Liability Act 1957 and the Health and Safety at Work etc. Act 1974. If someone is injured at your event and you failed to provide adequate first aid provision, you may face civil liability, HSE enforcement action, and in serious cases prosecution." },
      { type: 'p', text: "There is no single piece of legislation that specifies exactly how many first aiders you need per hundred attendees. Instead, you are required to make a reasonable assessment of the risks involved in your specific event and provide proportionate first aid cover. The principal guidance document is the Purple Guide, published by the Production Services Association." },
      { type: 'h2', text: 'Factors That Determine the Level of Cover Required' },
      { type: 'ul', items: [
        "Attendance numbers: the larger the crowd, the more first aiders you need. But attendance alone doesn't determine risk.",
        "Nature of the event: a contact sports tournament carries a very different risk profile from an outdoor cinema screening, even at the same attendance level.",
        "Demographics of attendees: events attracting older participants, young children, or people with known health conditions require additional provision.",
        "Alcohol and substance use: events where alcohol is served have a statistically higher rate of first aid incidents, including head injuries, cardiac events, and medical emergencies.",
        "Physical activity: events involving running, cycling, obstacle courses, or sports carry a higher rate of musculoskeletal and cardiovascular incidents.",
        "Duration: a 12-hour event in summer heat creates hydration, heat exhaustion, and fatigue risks that a 2-hour indoor event does not.",
        "Remoteness: if emergency services take more than 8 minutes to reach your site, your first aid provision must be able to sustain life for longer. In remote locations, this may mean having a dedicated paramedic on site.",
        "Site characteristics: crowded, poorly lit, or physically complex sites increase the difficulty of reaching casualties quickly.",
      ]},
      { type: 'h2', text: 'The Purple Guide: Indicative Ratios' },
      { type: 'p', text: "The Purple Guide provides guidance rather than enforceable ratios, but the following are widely used as a starting point:" },
      { type: 'ul', items: [
        "Up to 500 attendees, low risk: 1 first aider, first aid kit, clear communication with local ambulance service",
        "500–3,000 attendees, medium risk: 2 first aiders, first aid post with basic equipment, ambulance service notification",
        "3,000–10,000 attendees, higher risk: first aider ratio of approximately 1 per 250 attendees, a dedicated first aid post, senior first aider or paramedic on site",
        "Over 10,000 attendees: formal medical team with paramedic or nurse in charge, multiple first aid posts, event medical plan submitted to ambulance service and local authority",
      ]},
      { type: 'callout', text: "At events over 5,000 people, most local authorities and ambulance services require a formal Event Medical Plan. This should be submitted as part of your event licence application, often 28 days or more before the event." },
      { type: 'h2', text: 'What Your First Aid Plan Should Include' },
      { type: 'p', text: "A properly documented event first aid plan covers: the number and qualifications of all first aid personnel on site; the location of first aid posts and how they will be communicated to attendees; the equipment available at each post; the communication plan between first aiders and on-site management; how the team will interface with the ambulance service; and the maximum time it will take to reach any part of the site." },
      { type: 'h2', text: 'Working With a Professional Provider' },
      { type: 'p', text: "For events over a few hundred people, working with a professional first aid provider rather than relying on volunteers or in-house staff significantly reduces your risk exposure. A qualified provider will help you complete the risk assessment, write the medical plan, and ensure the cover you have in place would satisfy scrutiny from a licensing authority or, in a worst case, a coroner's inquest." },
      { type: 'p', text: "The cost of professional event first aid cover is almost always less than the excess on a public liability claim, the fine from a licensing authority, or the reputational damage from an incident that was poorly managed." },
    ],
  },
  {
    slug: 'what-happens-hse-inspection',
    category: 'Legal Compliance',
    title: "What Happens When the HSE Inspects and You're Not Compliant?",
    excerpt: "Improvement notices, prohibition notices, prosecution, and unlimited fines. Here's the real-world consequence of HSE non-compliance.",
    date: '19 Feb 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=1200&q=80',
    content: [
      { type: 'intro', text: "Most employers never see an HSE inspector. HSE resources are limited, and proactive inspections are targeted at higher-risk sectors: construction, manufacturing, agriculture, healthcare, and waste management. But inspections do happen, triggered by accidents, complaints, or routine sector campaigns, and when they do, the consequences of non-compliance can be severe." },
      { type: 'h2', text: 'What Triggers an HSE Inspection?' },
      { type: 'p', text: "Inspections arise from several sources: a reportable accident or dangerous occurrence under RIDDOR (the Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013); a complaint from an employee, trade union, or member of the public; a sector-wide enforcement campaign; or routine proactive inspection in a higher-risk industry." },
      { type: 'p', text: "First aid failures are rarely the sole reason for an inspection, but they are frequently identified as additional breaches when an inspector visits for another reason. An inspector investigating a workplace accident will almost certainly review your first aid provision as part of their enquiry. If your certificates are expired, your kit is unstocked, or you have no documented Needs Assessment, you will be cited." },
      { type: 'h2', text: 'The Fee for Intervention Scheme' },
      { type: 'p', text: "The Fee for Intervention (FFI) scheme, which came into force in October 2012, means that if an inspector identifies a material breach of health and safety law, the duty holder is charged for the HSE's time at the prevailing hourly rate (£198/hour as of 2024/25). This applies from the moment the inspector identifies the breach and continues until the matter is resolved." },
      { type: 'p', text: "An average FFI invoice arising from a first aid compliance issue, combined with a subsequent follow-up visit to verify compliance, might total £1,000–£2,000. That is before any formal enforcement action." },
      { type: 'h2', text: 'Improvement Notices' },
      { type: 'p', text: "An Improvement Notice is a formal legal notice issued under Section 21 of the Health and Safety at Work etc. Act 1974. It states that the inspector believes you are breaching health and safety law, specifies which provisions you are breaching, and sets a deadline of a minimum of 21 days by which you must remedy the breach." },
      { type: 'p', text: "You can appeal an Improvement Notice to an Employment Tribunal, and the notice is suspended pending the outcome of the appeal. However, if the notice is upheld and you have not complied, you are liable for prosecution." },
      { type: 'h2', text: 'Prohibition Notices' },
      { type: 'p', text: "A Prohibition Notice is more serious. Issued under Section 22 of the Act, it requires you to immediately stop an activity that the inspector believes involves a risk of serious personal injury. Unlike an Improvement Notice, a Prohibition Notice takes effect immediately, before any appeal. If you continue the prohibited activity after receiving the notice, you are committing a criminal offence." },
      { type: 'p', text: "Prohibition Notices are typically issued for imminent physical dangers such as machinery without guarding, unsafe structures, or work at height without fall protection. They are less common in first aid compliance cases, though not unknown where the absence of first aid provision is combined with other serious failings." },
      { type: 'callout', text: "Failure to comply with an Improvement or Prohibition Notice is a criminal offence under Section 33 of the Act. On summary conviction in a Magistrates' Court, the fine is unlimited. On indictment in a Crown Court, there is additionally the possibility of a custodial sentence for individuals." },
      { type: 'h2', text: 'Prosecution and the 2016 Sentencing Guidelines' },
      { type: 'p', text: "The Health and Safety Offences, Corporate Manslaughter and Food Safety and Hygiene Offences Definitive Guideline, which came into force in February 2016, fundamentally changed the scale of fines for health and safety offences. Fines are now calculated based on the culpability of the offender, the seriousness of the harm risked or caused, and critically, the turnover of the organisation." },
      { type: 'p', text: "For a large organisation (turnover over £50 million) convicted of a serious health and safety offence with high culpability and high harm, fines can exceed £10 million. Even for a micro-business (turnover under £2 million), fines in the thousands to tens of thousands are routinely imposed for serious breaches." },
      { type: 'p', text: "Individual directors and managers can also be prosecuted personally, and following conviction, may be disqualified from acting as a director under the Company Directors Disqualification Act 1986." },
      { type: 'h2', text: 'The Insurance Dimension' },
      { type: 'p', text: "Most employers' liability and public liability insurance policies contain clauses requiring the insured to comply with all relevant health and safety legislation. A finding by the HSE that you were in material breach of first aid regulations at the time of an incident may give your insurer grounds to dispute your claim or reduce the indemnity they provide. This is particularly relevant in personal injury claims brought by injured employees." },
      { type: 'h2', text: 'The Cost of Compliance' },
      { type: 'p', text: "A group EFAW course for up to twelve employees costs from £850. An FAW certificate costs from £1,850. A fully stocked first aid kit costs under £50. The total cost of proper compliance for most small businesses is in the hundreds of pounds. The cost of non-compliance, including FFI charges, Improvement Notice, potential prosecution, insurance complications, and reputational damage, begins in the thousands and has no upper limit." },
      { type: 'p', text: "Compliance is not just a legal obligation. It is almost always significantly cheaper than the alternative." },
    ],
  },
]

function ContentBlock({ block }) {
  switch (block.type) {
    case 'intro':
      return <p className="text-xl text-gray-600 leading-[1.8] mb-8 font-medium">{block.text}</p>
    case 'h2':
      return <h2 className="font-display font-800 text-2xl text-dark mt-12 mb-4">{block.text}</h2>
    case 'p':
      return <p className="text-gray-600 leading-[1.85] mb-5">{block.text}</p>
    case 'ul':
      return (
        <ul className="space-y-3 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-600 leading-relaxed text-[0.95rem]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-[0.55rem]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'callout':
      return (
        <div className="my-8 border-l-4 border-brand bg-brand-light rounded-r-xl px-6 py-5">
          <p className="text-dark font-semibold leading-relaxed text-[0.95rem]">{block.text}</p>
        </div>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const catStyle = CATEGORY_STYLE[post.category] || 'bg-dark text-white'
  const otherPosts = POSTS.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <div className="pt-[141px] lg:pt-[149px]">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt="" aria-hidden className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/50" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors duration-150 mb-8">
              <ArrowLeft size={14} /> Back to all articles
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`text-[10px] font-bold font-display uppercase tracking-wider px-3 py-1.5 rounded-full ${catStyle}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/50 text-xs">
                <Calendar size={11} /> {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-white/50 text-xs">
                <Clock size={11} /> {post.readTime} read
              </span>
            </div>
            <h1 className="font-display font-800 text-display-lg text-white text-balance leading-tight">
              {post.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE ───────────────────────────────────────────────── */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </Reveal>

          {/* Author */}
          <Reveal>
            <div className="mt-14 pt-10 border-t border-gray-100 flex items-center gap-5">
              <img
                src="/assets/hero.webp"
                alt="Harry Todhunter"
                className="w-16 h-16 rounded-full object-cover object-top shrink-0"
              />
              <div>
                <div className="font-display font-bold text-dark text-base">Harry Todhunter</div>
                <div className="text-gray-500 text-sm">Founder, LifeCare Training · Active Ambulance Technician · Industry Experience</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── MORE ARTICLES ─────────────────────────────────────────── */}
      {otherPosts.length > 0 && (
        <section className="bg-gray-50 py-16 lg:py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display font-800 text-2xl text-dark mb-10">More Articles</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map(({ slug: s, category, title, excerpt, date, readTime, image }, i) => (
                <Reveal key={s} delay={i * 70}>
                  <Link to={`/blog/${s}`}
                    className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card hover-lift focus-visible:outline-2 focus-visible:outline-brand"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img src={image} alt="" className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/45 to-transparent" />
                      <span className={`absolute top-3 left-3 text-[10px] font-bold font-display uppercase tracking-wider px-2.5 py-1 rounded-full ${CATEGORY_STYLE[category] || 'bg-dark text-white'}`}>
                        {category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-display font-bold text-dark text-[1rem] leading-snug mb-2 group-hover:text-brand transition-colors duration-150 flex-1">
                        {title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
                      <div className="flex items-center justify-between text-gray-400 text-xs font-medium">
                        <span>{date}</span>
                        <span className="flex items-center gap-1"><Clock size={10} /> {readTime}</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-20 bg-brand overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display font-800 text-display-md text-white mb-4">
            Need Training for Your Team?
          </h2>
          <p className="text-white/80 leading-relaxed mb-7">
            Get a free, no-obligation quote. Harry will recommend the right qualification for your workplace and tell you exactly what your legal duties require.
          </p>
          <Link to="/booking"
            className="inline-flex items-center gap-2 bg-white text-brand px-7 py-4 rounded-xl font-bold font-display text-base
              hover:bg-gray-50 active:scale-[0.98]
              shadow-[0_4px_20px_rgba(0,0,0,0.15)]
              transition-[background-color,transform] duration-150"
          >
            Get a Free Quote <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
