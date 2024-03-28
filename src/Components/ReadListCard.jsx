import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReadListCard = ({ book }) => {
  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    bookId,
  } = book;
  return (
    <div className="card flex flex-col md:flex-row p-3 md:p-6 gap-5 border h-full border-[#28282833] work-sans cursor-pointer hover:border-[#23BE0A]  transition-all duration-200 mb-5 ">
      <figure className="h-[220px] w-[230px] mx-auto">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-full object-cover object-center"
        />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title mb-2 md:mb-3 playfair text-2xl font-bold">
          {bookName}
        </h2>
        <p className="font-medium text-[#150B2B99]">By: {author}</p>
        <div className="flex flex-col md:flex-row w-full md:w-fit md:items-center gap-4 text-sm md:text-base">
          <div className="flex items-center gap-3">
            <p className="font-bold text-[#131313]">Tags:</p>
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 mr-3 md:mr-0 md:px-3 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 text-[#131313CC]">
            <IoLocationOutline size="22" />

            <p className="text-base">Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="*:flex *:items-center *:gap-1 flex flex-col md:flex-row gap-3 md:gap-5 text-[#13131399] mt-2">
          <div>
            <IoPeopleOutline size="25" />
            <p>Publisher: {publisher}</p>
          </div>
          <div>
            <FaRegFileAlt size="20" />
            <p>Page: {totalPages}</p>
          </div>
        </div>

        <hr className="my-4" />
        <div className="flex md:flex-row flex-col md:items-center justify-between gap-5 mb-2 text-[#131313CC] font-medium w-full md:w-fit">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-3 bg-[#328EFF26] text-[#328EFF] font-medium rounded-full">
              Catagory: {category}
            </span>
            <span className="px-4 py-3 bg-[#FFAC3326] text-[#FFAC33] font-medium rounded-full">
              Rating: {rating}
            </span>
          </div>
          <Link to={`/details/${bookId}`}>
            <button className="px-4 py-3 bg-[#23BE0A] text-white hover:bg-white border border-[#23BE0A] hover:text-black duration-200 hover:scale-105 font-medium rounded-full w-full md:w-auto">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadListCard;
