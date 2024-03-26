import banner_photo from "../assets/Banner-book.png";

const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] p-8 lg:p-20">
      <div className="hero-content flex-col gap-7 lg:gap-0 lg:flex-row-reverse justify-between w-full">
        <img src={banner_photo} />
        <div className="md:space-y-12 space-y-7 text-center md:text-left">
          <h1 className="md:text-6xl text-5xl  leading-tight font-bold playfair text-[#131313]">
            Books to freshen <br /> up your bookshelf
          </h1>

          <button className="bg-[#23BE0A] hover:bg-[#7cdb6e] lg:text-lg font-semibold px-5 py-3 rounded-lg text-white">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
