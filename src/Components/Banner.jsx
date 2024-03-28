import { Link } from "react-router-dom";
import banner_photo from "../assets/Banner-book.png";

const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] p-8 lg:p-20 rounded-3xl">
      <div className="hero-content flex-col gap-7 lg:gap-0 lg:flex-row-reverse justify-between w-full">
        <img src={banner_photo} />
        <div className="md:space-y-12 space-y-7 text-center md:text-left">
          <h1 className="md:text-6xl text-5xl leading-tight font-bold playfair text-[#131313]">
            Books to freshen <br /> up your bookshelf
          </h1>
          <div>
            <Link to={"/listedbooks"}>
              <button className="bg-[#23BE0A] work-sans border border-[#23BE0A] hover:bg-white duration-200 lg:text-lg font-semibold px-5 py-3 rounded-lg text-white hover:text-[#131313]">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
