import { useState } from 'react'

const PASSWORD = 'Rrw7KFZhTqcf'
const SESSION_KEY = 'lc_auth'

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1')
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return children

  function handleSubmit(e) {
    e.preventDefault()
    if (input === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1')
      setUnlocked(true)
    } else {
      setError(true)
      setInput('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm text-center">
        <img src="/logo.png" alt="Lifecare" className="h-12 mx-auto mb-6" onError={e => e.target.style.display='none'} />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Protected Site</h1>
        <p className="text-gray-500 text-sm mb-6">Enter the password to continue.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false) }}
            placeholder="Password"
            autoFocus
            className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-red-500 transition ${error ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
          />
          {error && <p className="text-red-500 text-xs">Incorrect password. Try again.</p>}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg transition"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}
