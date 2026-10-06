import { useState } from 'react';

/** Newsletter signup used in the footer. Posts to the API service. */
export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('done');
      setMessage('Thank you — you are on the list.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="flex items-center gap-3 border-b border-warm-white/25 pb-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Your email address"
          className="w-full bg-transparent text-sm font-light text-warm-white placeholder-warm-white/40 outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="label shrink-0 text-warm-white/70 transition-colors duration-300 hover:text-warm-white disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending…' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-xs ${status === 'error' ? 'text-red-300' : 'text-warm-white/60'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
