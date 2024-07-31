import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main className="min-h-[100svh] flex flex-col items-center justify-around">
      {false && <div />}
      <GameBoard />
    </main>
  );
}

export default App;
