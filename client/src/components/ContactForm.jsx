import { useState } from 'react';
import { projectTypes } from '../data/content.js';

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  location: '',
  projectType: '',
  budget: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  async function onSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'We could not send your inquiry.');
      setStatus('done');
      setForm(EMPTY);
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    }
  }

  if (status === 'done') {
    return (
      <div className="border border-charcoal/15 px-8 py-16 text-center">
        <p className="label text-charcoal/45">Inquiry received</p>
        <p className="display mt-6 text-3xl uppercase sm:text-4xl">Thank you.</p>
        <p className="mx-auto mt-6 max-w-sm text-sm font-light leading-relaxed text-charcoal/60">
          We have received your inquiry and will be in touch within two working days.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="label mt-10 border border-charcoal/20 px-7 py-4 transition-all duration-500 ease-editorial hover:bg-charcoal hover:text-warm-white"
        >
          Send another inquiry →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
      <label className="block">
        <span className="label text-charcoal/45">Full name *</span>
        <input
          required
          value={form.name}
          onChange={update('name')}
          placeholder="Your name"
          className="field mt-3"
        />
      </label>

      <label className="block">
        <span className="label text-charcoal/45">Email *</span>
        <input
          required
          type="email"
          value={form.email}
          onChange={update('email')}
          placeholder="you@example.com"
          className="field mt-3"
        />
      </label>

      <label className="block">
        <span className="label text-charcoal/45">Phone</span>
        <input
          value={form.phone}
          onChange={update('phone')}
          placeholder="+971 00 000 0000"
          className="field mt-3"
        />
      </label>

      <label className="block">
        <span className="label text-charcoal/45">Location</span>
        <input
          value={form.location}
          onChange={update('location')}
          placeholder="City, country"
          className="field mt-3"
        />
      </label>

      <label className="block">
        <span className="label text-charcoal/45">Project type</span>
        <select value={form.projectType} onChange={update('projectType')} className="field mt-3">
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="label text-charcoal/45">Estimated budget</span>
        <input
          value={form.budget}
          onChange={update('budget')}
          placeholder="e.g. 2,000,000 USD"
          className="field mt-3"
        />
      </label>

      <label className="block sm:col-span-2">
        <span className="label text-charcoal/45">Message *</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your vision"
          className="field mt-3 resize-none"
        />
      </label>

      <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="label border border-charcoal/25 bg-charcoal px-9 py-4 text-warm-white transition-all duration-500 ease-editorial hover:bg-transparent hover:text-charcoal disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Send inquiry →'}
        </button>

        {status === 'error' && <p className="text-xs text-red-700">{message}</p>}
      </div>
    </form>
  );
}
