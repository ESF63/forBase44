import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/** Fullscreen viewer for project galleries. */
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const open = index !== null && index !== undefined;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (event.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, index, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 px-4 py-16 sm:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            onClick={onClose}
            className="label absolute right-6 top-6 text-warm-white/70 transition-colors hover:text-warm-white"
          >
            Close ✕
          </button>

          <motion.img
            key={index}
            src={images[index]}
            alt=""
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            onClick={(event) => event.stopPropagation()}
            className="max-h-full max-w-full object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  onNavigate((index - 1 + images.length) % images.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-6 text-2xl font-light text-warm-white/60 transition-colors hover:text-warm-white sm:left-8"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  onNavigate((index + 1) % images.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-6 text-2xl font-light text-warm-white/60 transition-colors hover:text-warm-white sm:right-8"
              >
                →
              </button>
              <p className="label absolute bottom-6 left-1/2 -translate-x-1/2 text-warm-white/50">
                {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
