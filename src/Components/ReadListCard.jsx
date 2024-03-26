import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";

const ReadListCard = ({ book }) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="card flex flex-row p-6 border h-full border-[#28282833] work-sans cursor-pointer hover:border-[#23BE0A]  transition-all duration-200 mb-5 ">
      <figure className="h-[220px] w-[230px]">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-full object-cover object-center"
        />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title mb-3 playfair text-2xl font-bold">
          {bookName}
        </h2>
        <p className="font-medium text-[#150B2B99]">By: {author}</p>
        <div className="flex w-fit items-center gap-4">
          <p className="font-bold text-[#131313]">Tag</p>
          <div className="flex gap-3 ">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex gap-1 text-[#131313CC]">
            <IoLocationOutline size="22" />

            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="*:flex *:items-center *:gap-1 flex gap-5 text-[#13131399] mt-2">
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
        <div className="flex items-center justify-between gap-5 mb-2 text-[#131313CC] font-medium w-fit">
          <span className="px-5 py-3 bg-[#328EFF26] text-[#328EFF] font-medium rounded-full">
            Catagory: {category}
          </span>
          <span className="px-5 py-3 bg-[#FFAC3326] text-[#FFAC33] font-medium rounded-full">
            Rating: {rating}
          </span>
          <button className="px-5 py-3 bg-[#23BE0A] text-white font-medium rounded-full">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadListCard;
