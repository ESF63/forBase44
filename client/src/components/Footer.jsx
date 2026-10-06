import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm.jsx';
import { navLinks, socials, studio } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="bg-ink text-warm-white">
      <div className="shell py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl font-medium tracking-[0.3em]">ARCORA</p>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-warm-white/55">
              {studio.tagline}
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="label text-mist">Navigation</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-light text-warm-white/75 transition-colors duration-300 hover:text-warm-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="label text-mist">Newsletter</p>
            <p className="mt-6 text-sm font-light leading-relaxed text-warm-white/55">
              Receive our latest projects and architectural stories.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>

            <ul className="mt-10 flex gap-6">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="label text-warm-white/55 transition-colors duration-300 hover:text-warm-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-warm-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-wide text-warm-white/35">
            © 2026 ARCORA. All rights reserved.
          </p>
          <p className="text-[11px] uppercase tracking-wide text-warm-white/35">
            {studio.location} · {studio.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
