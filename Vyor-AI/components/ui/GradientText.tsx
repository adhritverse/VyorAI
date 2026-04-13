import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  colors = ['#3ECF8E', '#00DDB3', '#10b981', '#3ECF8E'],
  animationSpeed = 4,
  showBorder = false,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium transition-shadow duration-500 hover:shadow-[0_0_2rem_-0.5rem_#3ECF8E] ${className}`}>
      {showBorder && (
        <div
          className="absolute inset-0 block h-full w-full animate-gradient bg-[length:300%_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
          style={gradientStyle}
        />
      )}
      <div
        className="animate-gradient bg-[length:300%_100%] bg-clip-text text-transparent"
        style={gradientStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientText;
