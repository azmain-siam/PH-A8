import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 work-sans px-0 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-1 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-base p-4 mt-2 ml-2 z-[1] *:py-1 shadow bg-base-100 rounded-box w-48"
            >
              <Link to={"/"}>Home</Link>
              <Link to={"/listedbooks"}>Listed Books</Link>
              <Link to={"/pagestoread"}>Pages to Read</Link>
            </ul>
          </div>
          <Link
            to={"/"}
            className="md:text-3xl text-2xl font-bold cursor-pointer"
          >
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 *:text-lg">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "border border-[#23BE0A] font-semibold text-[#23BE0A] rounded-lg hover:text-[#23BE0A] px-5 py-3"
                  : "rounded-lg hover:text-[#23BE0A] px-5 py-3"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/listedbooks"}
              className={({ isActive }) =>
                isActive
                  ? "border border-[#23BE0A] font-semibold text-[#23BE0A] rounded-lg hover:text-[#23BE0A] px-5 py-3"
                  : "rounded-lg hover:text-[#23BE0A] px-5 py-3"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to={"/pagestoread"}
              className={({ isActive }) =>
                isActive
                  ? "border border-[#23BE0A] font-semibold text-[#23BE0A] rounded-lg hover:text-[#23BE0A] px-5 py-3"
                  : "rounded-lg hover:text-[#23BE0A] px-5 py-3"
              }
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-2 md:gap-4">
          <button className="bg-[#23BE0A] hover:bg-[#7cdb6e] text-sm lg:text-lg font-semibold px-4 lg:px-5 py-3 lg:py-3 rounded-lg text-white">
            Sign In
          </button>
          <button className="bg-[#59C6D2] hover:bg-[#86dae4] text-sm lg:text-lg font-semibold px-4 lg:px-5 py-3 lg:py-3 rounded-lg text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
