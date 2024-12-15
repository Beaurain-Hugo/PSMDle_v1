export default function Footer() {
    return (
        <footer className="relative z-10 py-4 mt-auto md:py-6">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold tracking-wider md:text-xl neon-text">
                            Les Immoreaux
                        </span>
                    </div>
                    <p className="text-xs text-purple-200 md:text-sm">
                        © {new Date().getFullYear()} - All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}