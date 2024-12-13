import React from 'react';
import { Champion } from '../types/champion';
import { compareAttribute } from '../utils/championUtils';
import ChampionImage from './ChampionImage';

interface GuessGridProps {
  guesses: string[];
  champions: Champion[];
  dailyChampion: Champion | null;
}

export default function GuessGrid({ guesses, champions, dailyChampion }: GuessGridProps) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-6 gap-3 font-bold text-sm text-center p-2">
        <div className="text-[#ff00ff] neon-text">Professeur</div>
        <div className="text-[#00ffff] neon-text">Genre</div>
        <div className="text-[#ff00ff] neon-text">Domaine</div>
        <div className="text-[#00ffff] neon-text">Cheveux</div>
        <div className="text-[#ff00ff] neon-text">Yeux</div>
        <div className="text-[#00ffff] neon-text">UE</div>
      </div>

      {guesses.map((guessName, index) => {
        const guess = champions.find(c => c.name === guessName)!;
        return (
          <div key={index} className="grid grid-cols-6 gap-3 text-sm items-center">
            {/* <div className="flex justify-center">
              {/* <ChampionImage name={guess.name} /> */}
            {/* </div> */}
            {Object.entries({
              name: guess.name,
              genre: guess.genre,
              domaine: guess.domaine,
              cheveux: guess.cheveux,
              yeux: guess.yeux,
              UE: guess.UE.join(', '),
            }).map(([key, value], cellIndex) => (
              <div
                key={cellIndex}
                className={`p-3 rounded neon-border
                  ${compareAttribute(
                    key === 'UE' ? guess.UE : value,
                    key === 'UE' ? dailyChampion?.UE : dailyChampion?.[key as keyof Champion]
                  )}`}
              >
                {value}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}