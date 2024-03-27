import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, saveWishlist } from "../Utils";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  const book = books.find((book) => book.bookId == bookId);
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

  const handleAddRead = (book) => {
    saveBook(book);
  };

  const handleAddWishlist = (book) => {
    saveWishlist(book);
  };
  // console.log(bookId, books);

  return (
    <section className="flex gap-12 work-sans mt-3">
      {/* Image Container */}
      <div className="min-w-[45%] h-[520px]  rounded-2xl flex justify-center mt-8 ">
        <img className="h-full object-cover" src={image} alt="" />
      </div>

      {/* Details Container */}
      <div className="pb-10">
        <h3 className="playfair text-5xl font-bold text-[#131313] mb-4">
          {bookName}
        </h3>
        <p className="font-medium text-[#131313CC] text-xl">By: {author}</p>
        <hr className="my-4" />
        <p className="font-medium text-[#131313CC] text-xl">{category}</p>
        <hr className="my-4" />
        <p className="text-[#131313] font-bold mb-14">
          Review:{" "}
          <span className="text-[#131313CC]  font-normal">{review}</span>
        </p>
        <h4 className="text-[#131313] font-bold mb-5 flex gap-3 items-center">
          Tags:
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-2 bg-[#23BE0A0D] text-[#23BE0A] font-medium"
            >
              {tag}
            </span>
          ))}
        </h4>
        <hr className="my-4" />
        <div className="flex gap-6 mb-8">
          <div className="space-y-3">
            <h4>Number of pages:</h4>
            <h4>Publisher:</h4>
            <h4>Year of Publishing:</h4>
            <h4>Rating:</h4>
          </div>
          <div className="space-y-3 font-semibold text-[#131313]">
            <h4>{totalPages}</h4>
            <h4>{publisher}</h4>
            <h4>{yearOfPublishing}</h4>
            <h4>{rating}</h4>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 mb-6">
          <button
            onClick={() => handleAddRead(book)}
            className="bg-white hover:bg-[#7cdb6e] border-2 duration-300 text-sm lg:text-lg font-semibold px-4 lg:px-5 py-3 lg:py-3 rounded-lg"
          >
            Read
          </button>
          <button
            onClick={() => handleAddWishlist(book)}
            className="bg-[#59C6D2] hover:bg-[#86dae4]  duration-300 text-sm lg:text-lg font-semibold px-4 lg:px-5 py-3 lg:py-3 rounded-lg text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
