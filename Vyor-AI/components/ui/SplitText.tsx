'use client';

import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  wordClassName?: string;
}

export const SplitText = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  wordClassName = '',
}: SplitTextProps) => {
  const words = text.split(' ');
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <h2 ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: delay + i * 0.1,
                  duration: duration,
                  ease: [0.33, 1, 0.68, 1], // easeOutCubic
                },
              },
            }}
          >
            {word}
            {i !== words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </h2>
  );
};

export default SplitText;
