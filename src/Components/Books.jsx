import { useLoaderData } from "react-router-dom";
import BooksCard from "./BooksCard";

const Books = () => {
  const books = useLoaderData();
  return (
    <div>
      <h3 className="playfair text-4xl font-bold text-[#131313] text-center mt-24 mb-10">
        Books
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <BooksCard key={book.id} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
