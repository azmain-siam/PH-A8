const BooksCard = ({ book }) => {
  console.log(book);
  const { rating, category, tags, image, bookName, author } = book;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10 h-[250px]">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{bookName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
