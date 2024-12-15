import { Gamepad2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative z-10 py-6 mb-8">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center gap-4">
          <Gamepad2 className="w-12 h-12 text-[#ff00ff]" />
          <h1 className="text-6xl font-bold tracking-wider neon-text">PSMdle</h1>
        </div>
        <p className="mt-4 text-lg text-center text-purple-200">
          Daily PSM Professor Guessing Game
        </p>
      </div>
    </header>
  );
}