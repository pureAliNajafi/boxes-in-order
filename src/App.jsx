import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main className="w-full max-w-[1024px] mx-auto min-h-[100svh] flex flex-col items-center justify-around">
      <GameBoard />
    </main>
  );
}

export default App;
