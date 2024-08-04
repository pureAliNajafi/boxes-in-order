import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100svh] max-w-full overflow-hidden">
      <main className="w-full h-full max-w-[1024px] mx-auto  flex flex-col items-center justify-around">
        {children}
      </main>
    </div>
  );
};

export default Layout;
