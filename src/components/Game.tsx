import React, { useState, useEffect } from "react";
import { professors } from "../data/professors";
import { getDailyProfessor } from "../utils/professorUtils";
import ProfessorSearch from "./ProfessorSearch";
import GuessGrid from "./GuessGrid";
import WinMessage from "./WinMessage";
import { Professor } from "../types/professor";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Game() {
    const [dailyProfessor, setDailyProfessor] = useState<Professor | null>(null);
    const [guesses, setGuesses] = useLocalStorage<string[]>("guesses", []);
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [gameWon, setGameWon] = useState(() => {
        const savedGuesses = localStorage.getItem("guesses");
        const savedDailyProfessor = localStorage.getItem("dailyProfessor");
        if (savedGuesses && savedDailyProfessor) {
            const guessesArray = JSON.parse(savedGuesses);
            const dailyProfessor = JSON.parse(savedDailyProfessor);
            return guessesArray.includes(dailyProfessor.name);
        }
        return false;
    });

    useEffect(() => {
        const professor = getDailyProfessor();
        setDailyProfessor(professor);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);

        if (value.length > 0) {
            const filtered = professors
                .map((c) => c.name)
                .filter((name) =>
                    name.toLowerCase().includes(value.toLowerCase())
                )
                .filter((name) => !guesses.includes(name));
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    const handleGuess = (professorName: string) => {
        if (!dailyProfessor || gameWon || guesses.includes(professorName)) return;

        const guess = professors.find((c) => c.name === professorName);
        if (!guess) return;

        const newGuesses = [...guesses, professorName];
        setGuesses(newGuesses);
        setInput("");
        setSuggestions([]);

        if (professorName === dailyProfessor.name) {
            setGameWon(true);
        }
    };

    return (
        <div className="relative z-10">
            <main className="container px-4 pb-4 mx-auto md:pb-8">
                <div className="flex flex-col max-w-full gap-4 mx-auto md:max-w-5xl md:gap-8 neon-card">
                    {gameWon && dailyProfessor && (
                        <WinMessage
                            guessCount={guesses.length}
                            professor={dailyProfessor}
                        />
                    )}

                    <ProfessorSearch
                        input={input}
                        onInputChange={handleInputChange}
                        suggestions={suggestions}
                        onSelect={handleGuess}
                        disabled={gameWon}
                    />

                    <GuessGrid
                        guesses={guesses}
                        professors={professors}
                        dailyProfessor={dailyProfessor}
                    />
                </div>
            </main>
        </div>
    );
}