import React from 'react';

interface NoiseProps {
  opacity?: number;
  patternSize?: number;
  patternScaleColor?: string;
  patternScaleColor2?: string;
  className?: string;
}

export const Noise: React.FC<NoiseProps> = ({
  opacity = 0.03,
  patternSize = 250,
  patternScaleColor = '#fff',
  patternScaleColor2 = '#000',
  className = '',
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-50 h-full w-full ${className}`}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 ${patternSize} ${patternSize}' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        mixBlendMode: 'overlay',
      }}
    />
  );
};

export default Noise;
