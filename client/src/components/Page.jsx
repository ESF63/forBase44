import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const EASE = [0.22, 1, 0.36, 1];

/** Page-level wrapper providing the cross-fade between routes. */
export default function Page({ children, className = '' }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title =
      pathname === '/'
        ? 'ARCORA — Designed for the way you live'
        : `ARCORA — ${pathname.replace('/', '').split('/')[0].replace(/^\w/, (c) => c.toUpperCase())}`;
  }, [pathname]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
