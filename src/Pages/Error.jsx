import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen work-sans">
      <div className="text-center">
        <h1 className="text-[150px] font-extrabold">Oops!</h1>
        <h3 className="text-2xl font-semibold uppercase mb-4">
          404 - Page not found
        </h3>
        <p className="w-[500px] text-sm font-medium mb-4">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to={"/"}>
          <button className="bg-[#0145D4] shadow shadow-slate-500 text-sm hover:scale-105 duration-200 uppercase font-semibold px-5 py-2 rounded-full text-white">
            Go to homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
