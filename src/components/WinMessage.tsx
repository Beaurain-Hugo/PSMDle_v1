import { useEffect, useState } from "react";
import { Professor } from "../types/professor";


interface WinMessageProps {
    guessCount: number;
    professor: Professor;
}

const getTimeUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
    );
    return midnight.getTime() - now.getTime();
};

export default function WinMessage({ guessCount, professor }: WinMessageProps) {
    const [timeUntilMidnight, setTimeUntilMidnight] = useState(
        getTimeUntilMidnight()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeUntilMidnight(getTimeUntilMidnight());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (milliseconds: number) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <>
            <div className="flex flex-col gap-4 text-center">
                <h2 className="text-4xl font-bold neon-text">Victory!</h2>
                <div className="flex flex-col justify-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            height={64}
                            width={64}
                            src={
                                "https://ui-avatars.com/api/?name=" +
                                professor.name
                            }
                            alt={professor.name}
                        />
                        <p className="text-purple-100">{professor.name}</p>
                    </div>
                </div>
                <p className="text-xl text-[#00ffff]">
                    Professor found in {guessCount}{" "}
                    {guessCount === 1 ? "try" : "tries"}!
                </p>
                <div className="text-purple-100">
                    <p>New professor to find in: </p>
                    <p className="text-2xl">{formatTime(timeUntilMidnight)}</p>
                </div>
            </div>
        </>
    );
}
