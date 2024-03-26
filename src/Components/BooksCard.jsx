import starIcon from "../assets/Vector.svg";

const BooksCard = ({ book }) => {
  console.log(book);
  const { rating, category, tags, image, bookName, author } = book;

  return (
    <div>
      <div className="card p-6 border h-full border-[#28282833] work-sans cursor-pointer hover:border-[#23BE0A] hover:scale-[1.03] transition-all duration-200 hover:bg-[#22be0a05]">
        <figure className="h-[220px]">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-full object-cover object-center"
          />
        </figure>
        <div className="card-body p-0 pt-6">
          <div className="flex gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-2 bg-[#23BE0A0D] text-[#23BE0A] text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="card-title mb-3 playfair text-2xl font-bold">
            {bookName}
          </h2>
          <p className="font-medium text-[#150B2B99]">By: {author}</p>
          <hr className="my-1 border-dashed" />
          <div className="flex items-center justify-between gap-5 mb-2 text-[#131313CC] font-medium">
            <div className="flex items-center gap-2 md:gap-3">
              <p className="text-sm md:text-base">{category}</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm md:text-base">{rating}</p>
              <img className="w-4" src={starIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
