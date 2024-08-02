import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <div className="h-[100svh] max-w-full overflow-hidden">
      <main className="w-full h-full max-w-[1024px] mx-auto  flex flex-col items-center justify-around">
        <SinglePlayer />
      </main>
    </div>
  );
}

export default App;
