import homeLogo from "../assets/home-icon.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="border-gray-200 bg-gray-900 mb-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <Link to={"/"}>
          <img src={homeLogo} alt="" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
