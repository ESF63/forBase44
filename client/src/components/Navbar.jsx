import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../data/content.js';

const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial',
          solid
            ? 'border-b border-charcoal/10 bg-warm-white/95 text-charcoal shadow-[0_1px_30px_rgba(20,19,17,0.06)] backdrop-blur-md'
            : 'border-b border-transparent bg-transparent text-warm-white',
        ].join(' ')}
      >
        <div
          className={[
            'shell flex items-center justify-between transition-all duration-500 ease-editorial',
            solid ? 'h-[68px]' : 'h-24',
          ].join(' ')}
        >
          <Link
            to="/"
            aria-label="ARCORA — home"
            className="font-display text-2xl font-medium tracking-[0.3em] sm:text-[28px]"
          >
            ARCORA
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'label relative py-1 transition-opacity duration-300',
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className={[
                'label hidden border px-5 py-3 transition-all duration-500 ease-editorial lg:inline-block',
                solid
                  ? 'border-charcoal/25 hover:border-charcoal hover:bg-charcoal hover:text-warm-white'
                  : 'border-warm-white/40 hover:border-warm-white hover:bg-warm-white hover:text-charcoal',
              ].join(' ')}
            >
              Start a project →
            </Link>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 flex-col items-end justify-center gap-[7px] lg:hidden"
            >
              <span
                className={[
                  'block h-px bg-current transition-all duration-500 ease-editorial',
                  open ? 'w-7 translate-y-[4px] rotate-45' : 'w-7',
                ].join(' ')}
              />
              <span
                className={[
                  'block h-px bg-current transition-all duration-500 ease-editorial',
                  open ? 'w-7 -translate-y-[4px] -rotate-45' : 'w-4',
                ].join(' ')}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-warm-white lg:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="shell flex h-full flex-col justify-between pb-12 pt-32">
              <nav className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.7, ease: EASE }}
                    className="border-b border-charcoal/10"
                  >
                    <Link
                      to={link.to}
                      className="flex items-baseline justify-between py-4 font-display text-[40px] font-light leading-none"
                    >
                      {link.label}
                      <span className="label text-charcoal/35">0{i + 1}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="space-y-6"
              >
                <Link to="/contact" className="label inline-block border border-charcoal/25 px-6 py-4">
                  Start a project →
                </Link>
                <p className="text-xs tracking-wide text-charcoal/50">Dubai, UAE · hello@arcora.com</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
