import React from 'react';
import ChampionImage from './ChampionImage';
import { Trophy } from 'lucide-react';

interface WinMessageProps {
  guessCount: number;
  championName: string;
}

export default function WinMessage({ guessCount, championName }: WinMessageProps) {
  return (
    <div className="mt-8 text-center">
      <div className="flex justify-center mb-4">
        {/* <ChampionImage name={championName} size="large" /> */}
        <Trophy/>
      </div>
      <h2 className="text-4xl font-bold neon-text mb-4">Victory!</h2>
      <p className="text-xl text-[#00ffff]">
        Professor found in {guessCount} {guessCount === 1 ? 'try' : 'tries'}!
      </p>
    </div>
  );
}