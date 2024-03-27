import { useEffect, useState } from "react";
import { getWishlist } from "../Utils";
import ReadListCard from "./ReadListCard";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = getWishlist();
    setWishlist(storedWishlist);
  }, []);

  return (
    <div>
      {wishlist.map((book) => (
        <ReadListCard key={book.bookId} book={book}></ReadListCard>
      ))}
    </div>
  );
};

export default Wishlist;
