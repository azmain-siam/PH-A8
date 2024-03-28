/* eslint-disable react/prop-types */

import BooksCard from "./BooksCard";

const Books = ({ books }) => {
  return (
    <div>
      <h3 className="playfair text-4xl font-bold text-[#131313] text-center mt-12 md:mt-24 mb-10">
        Books
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-10">
        {books.map((book) => (
          <BooksCard key={book.bookId} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
