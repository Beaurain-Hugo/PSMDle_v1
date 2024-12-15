import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
    return (
        <div className="flex flex-col min-h-screen synthwave-layout">
            <Header />
            <div className="flex-1">
                <Game />
            </div>
            <Footer />
        </div>
    );
}

export default App;
