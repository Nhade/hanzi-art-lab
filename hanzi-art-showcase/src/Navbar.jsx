import ThemeSelector from "./ThemeSelector"

function Navbar() {
  return (
    <div className="navbar bg-white top-0 sticky bg-opacity-80 backdrop-filter backdrop-blur-sm z-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-black">owoSite</a>
      </div>
      <div className="flex-none">
        <ThemeSelector/>
      </div>
    </div>
  );
}

export default Navbar