export default function Header() {
    return (
        <header className="relative z-10 flex flex-col items-center justify-center gap-4 py-6 md:gap-8 md:py-12">
            <div className="container flex flex-col gap-2 px-4 text-center md:gap-4">
                <h1 className="text-4xl font-bold tracking-wider md:text-5xl lg:text-6xl neon-text">
                    PSMdle
                </h1>
                <p className="text-sm text-purple-200 md:text-base lg:text-lg">
                    Daily PSM Professor Guessing Game
                </p>
            </div>
        </header>
    );
}