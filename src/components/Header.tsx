import React from 'react';
// import { GameController } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative z-10 py-6 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          {/* <GameController className="w-12 h-12 text-[#ff00ff]" /> */}
          <h1 className="text-6xl font-bold neon-text tracking-wider">PSMdle</h1>
        </div>
        <p className="text-center mt-4 text-purple-200 text-lg">
          Daily PSM Professor Guessing Game
        </p>
      </div>
    </header>
  );
}