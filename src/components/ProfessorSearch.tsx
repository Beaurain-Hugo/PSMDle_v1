import React from "react";
import { Search } from "lucide-react";

interface ProfessorSearchProps {
    input: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    suggestions: string[];
    onSelect: (name: string) => void;
    disabled: boolean;
}

export default function ProfessorSearch({
    input,
    onInputChange,
    suggestions,
    onSelect,
    disabled,
}: ProfessorSearchProps) {
    return (
        <div className="relative">
            <div className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={onInputChange}
                    placeholder="Enter professor name..."
                    className="pr-12 neon-input"
                    disabled={disabled}
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ff00ff]" />
            </div>

            {suggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-2 divide-y neon-card divide-purple-800/30">
                    {suggestions.map((name) => (
                        <button
                            key={name}
                            onClick={() => onSelect(name)}
                            className="flex items-center w-full gap-3 p-3 text-left text-purple-100 transition-colors hover:bg-purple-900/20"
                        >
                            <img
                                src={"https://ui-avatars.com/api/?name=" + name}
                                alt={name}
                            />
                            <span>{name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
