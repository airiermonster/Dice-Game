import React from 'react';
import { cn } from '@/lib/utils';

interface DiceProps {
  value: number;
  isRolling: boolean;
}

const Dice = ({ value, isRolling }: DiceProps) => {
  
  // picha yoyoyte ile ya dice kulingana na value
  
  const imageSrc = `${value}.png`;

  return (
    <div
      className={cn(
        "w-24 h-24 relative",
        "transform transition-transform",
        isRolling && "animate-roll-dice"
      )}
    >
      <img 
        src={imageSrc} 
        alt={`Dice showing ${value}`}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Dice;