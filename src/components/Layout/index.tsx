import "../../assets/fonts/SpenbebGame-R9q46.otf";
import Nav from "./Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-spenbeb-game h-[100svh] max-w-full overflow-hidden ">
      <main className="relative w-full h-full max-w-[1024px] mx-auto  flex flex-col items-center justify-around select-none">
        <Nav />
        {children}
      </main>
    </div>
  );
};

export default Layout;
