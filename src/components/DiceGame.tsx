import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Dice from './Dice';
import { toast } from 'sonner';

const colors = [
  '#9b87f5', '#7E69AB', '#6E59A5', '#1A1F2C', '#D6BCFA',
  '#F2FCE2', '#FEF7CD', '#FEC6A1', '#E5DEFF', '#FFDEE2',
  '#FDE1D3', '#D3E4FD', '#F1F0FB', '#8B5CF6', '#D946EF',
  '#F97316', '#0EA5E9', '#403E43', '#8A898C', '#1EAEDB',
  '#221F26', '#C8C8C9', '#9F9EA1', '#33C3F0'
];

const DiceGame = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const changeBackgroundColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  };

  const rollDice = () => {
    setIsRolling(true);
    
    if (isRolling) return;

    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;

    setDice1(newDice1);
    setDice2(newDice2);
    changeBackgroundColor();

    setTimeout(() => {
      setIsRolling(false);
      if (newDice1 > newDice2) {
        toast("🚩 Player 1 Wins!");
      } else if (newDice2 > newDice1) {
        toast("Player 2 Wins! 🚩");
      } else {
        toast("Draw!");
      }
    }, 500);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-4xl font-bold text-[#4ECCA3] mb-8">
        Welcome to Maximillian Urio's Dice Game
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-12 items-center mb-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#4ECCA3] mb-4">Player 1</h2>
          <Dice value={dice1} isRolling={isRolling} />
        </div>
        
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#4ECCA3] mb-4">Player 2</h2>
          <Dice value={dice2} isRolling={isRolling} />
        </div>
      </div>

      <Button 
        onClick={rollDice}
        disabled={isRolling}
        className="bg-[#4ECCA3] text-white hover:bg-[#4ECCA3]/90 transition-colors px-8 py-4 text-lg font-semibold"
      >
        {isRolling ? "Rolling..." : "Roll Dice"}
      </Button>
    </div>
  );
};

export default DiceGame;