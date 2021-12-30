import { Link } from "react-router-dom";

export const Navbar = ({ title = "Github Finder" }: { title?: string }) => {
  return (
    <nav>
      <div>
        <div>
          <Link to="/">{title}</Link>
        </div>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
