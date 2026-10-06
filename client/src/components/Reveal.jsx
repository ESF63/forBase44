import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/** Fade-up wrapper for text and blocks entering the viewport. */
export function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/** Image reveal: the picture settles into place as it enters view. */
export function ImageReveal({
  src,
  alt,
  className = '',
  imgClassName = '',
  delay = 0,
  parallax = false,
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={imgClassName}
        initial={{ opacity: 0, scale: parallax ? 1.14 : 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.5, delay, ease: EASE }}
      />
    </div>
  );
}

export { EASE };
