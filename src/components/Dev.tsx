const Dev = ({ children }: { children: React.ReactNode }) => {
  const { href } = window.location;
  const showContent = href.includes("dev") || href.includes("cheat");
  return <>{showContent ? children : null}</>;
};
export default Dev;
