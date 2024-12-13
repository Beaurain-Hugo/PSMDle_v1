import React from 'react';
import { Search } from 'lucide-react';
import ChampionImage from './ChampionImage';

interface ChampionSearchProps {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: string[];
  onSelect: (name: string) => void;
  disabled: boolean;
}

export default function ChampionSearch({
  input,
  onInputChange,
  suggestions,
  onSelect,
  disabled
}: ChampionSearchProps) {
  return (
    <div className="relative mb-8">
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={onInputChange}
          placeholder="Enter professor name..."
          className="neon-input pr-12"
          disabled={disabled}
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ff00ff]" />
      </div>
      
      {suggestions.length > 0 && (
        <div className="absolute w-full mt-2 neon-card divide-y divide-purple-800/30">
          {suggestions.map(name => (
            <button
              key={name}
              onClick={() => onSelect(name)}
              className="w-full text-left p-3 flex items-center gap-3 
                       text-purple-100 hover:bg-purple-900/20 transition-colors"
            >
              <ChampionImage name={name} size="small" />
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}