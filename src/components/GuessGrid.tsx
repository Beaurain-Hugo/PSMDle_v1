import { Professor } from '../types/professor';
import { compareAttribute } from '../utils/professorUtils';

interface GuessGridProps {
  guesses: string[];
  professors: Professor[];
  dailyProfessor: Professor | null;
}

export default function GuessGrid({ guesses, professors, dailyProfessor }: GuessGridProps) {
  return (
    <div className="space-y-3">
      <div className="grid items-center justify-center grid-cols-7 gap-3 p-2 text-sm font-bold text-center">
        <div className="text-[#ff00ff] neon-text">Photo</div>
        <div className="text-[#ff00ff] neon-text">Professeur</div>
        <div className="text-[#00ffff] neon-text">Genre</div>
        <div className="text-[#ff00ff] neon-text">Domaine</div>
        <div className="text-[#00ffff] neon-text">Cheveux</div>
        <div className="text-[#ff00ff] neon-text">Yeux</div>
        <div className="text-[#00ffff] neon-text">UE</div>
      </div>

      {guesses.slice().reverse().map((guessName, index) => {
        const guess = professors.find(c => c.name === guessName)!;
        return (
          <div key={index} className="grid items-center justify-center grid-cols-7 gap-2 text-sm">
            <div className="flex justify-center gap-1">
              <img src={"https://ui-avatars.com/api/?name="+guess.name} alt={guess.name} />
            </div>
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
                className={`rounded neon-border no-scrollbar text-purple-100 p-2 text-center size-32 overflow-y-auto flex items-center justify-center
                  ${compareAttribute(
                    key === 'UE' ? guess.UE : value,
                    key === 'UE' ? dailyProfessor?.UE ?? '' : dailyProfessor?.[key as keyof Professor] ?? ''
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