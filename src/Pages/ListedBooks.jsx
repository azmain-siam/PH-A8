import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="work-sans">
      <div className="bg-[#1313130D] flex justify-center py-5 md:py-8 rounded-2xl text-2xl md:text-3xl font-bold">
        <h3>Books</h3>
      </div>
      <div className="flex w-full justify-center my-6">
        <select className="select select-bordered w-[200px] text-base max-w-xs">
          <option disabled selected>
            Sort By
          </option>
          <option className="bg-green">Rating</option>
          <option>Number of pages</option>
          <option>Published year</option>
        </select>
      </div>

      {/* ----------------Tabs---------------- */}
      <div className="flex items-center  overflow-x-auto overflow-y-hidden w-full md:text-lg mb-4 border-b">
        <Link
          onClick={() => setTabIndex(0)}
          to={""}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${
            tabIndex === 0 ? "border border-b-0 font-semibold" : ""
          }`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          onClick={() => setTabIndex(1)}
          to={"wishlist"}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${
            tabIndex === 1 ? "border border-b-0 font-semibold" : ""
          }`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default ListedBooks;
