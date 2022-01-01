import { Link } from "react-router-dom";

export const Navbar = ({ title = "Github Finder" }: { title?: string }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-secondary text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="text-lg font-bold">
            {title}
          </Link>
        </div>
        <div className="px-1 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
