import React, { useState, useEffect } from 'react';
import { champions } from '../data/champions';
import { getDailyChampion } from '../utils/championUtils';
import Header from './Header';
import ChampionSearch from './ChampionSearch';
import GuessGrid from './GuessGrid';
import WinMessage from './WinMessage';
import { Champion } from '../types/champion';

export default function Game() {
  const [dailyChampion, setDailyChampion] = useState<Champion | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    setDailyChampion(getDailyChampion());
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    
    if (value.length > 0) {
      const filtered = champions
        .map(c => c.name)
        .filter(name => 
          name.toLowerCase().includes(value.toLowerCase())
        );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleGuess = (championName: string) => {
    if (!dailyChampion || gameWon) return;
    
    const guess = champions.find(c => c.name === championName);
    if (!guess) return;

    setGuesses(prev => [...prev, championName]);
    setInput('');
    setSuggestions([]);

    if (championName === dailyChampion.name) {
      setGameWon(true);
    }
  };

  return (
    <div className="synthwave-layout">
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 pb-8">
          <div className="neon-card max-w-4xl mx-auto">
            <ChampionSearch
              input={input}
              onInputChange={handleInputChange}
              suggestions={suggestions}
              onSelect={handleGuess}
              disabled={gameWon}
            />

            <GuessGrid
              guesses={guesses}
              champions={champions}
              dailyChampion={dailyChampion}
            />

            {gameWon && dailyChampion && (
              <WinMessage 
                guessCount={guesses.length} 
                championName={dailyChampion.name}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}