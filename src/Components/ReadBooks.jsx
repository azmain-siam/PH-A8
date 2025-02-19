import { useEffect, useState } from "react";
import { getBooks } from "../Utils";
import ReadListCard from "./ReadListCard";

const ReadBooks = ({ data }) => {
  const [books, setBooks] = useState([]);
  console.log(data);

  console.log(books);
  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
  }, []);
  return (
    <div>
      {books.map((book) => (
        <ReadListCard key={book.bookId} book={book}></ReadListCard>
      ))}
    </div>
  );
};

export default ReadBooks;
