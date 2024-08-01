import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <main className="[&_canvas]:opacity-0 w-full max-w-[1024px] mx-auto min-h-[100svh] flex flex-col items-center justify-around">
      <SinglePlayer />
    </main>
  );
}

export default App;
