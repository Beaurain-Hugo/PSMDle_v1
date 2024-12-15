import { getYesterdayProfessor } from "../utils/professorUtils";

const YesterdayMessage = () => {
    const professor = getYesterdayProfessor();
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="font-semibold text-center text-purple-100 text-l">
                Yesterday professor was &nbsp;
                <span className="text-xl font-bold neon-text">
                    {professor.name}
                </span>
            </p>
        </div>
    );
};

export default YesterdayMessage;
