import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const saveBook = (book) => {
  let books = getBooks();
  const isExists = books.find((b) => b.bookId === book.bookId);
  if (isExists) {
    return toast.error("Already Added to Readlist");
  } else {
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    toast.success("Successfully Added to Readlist");
  }
};

export const getWishlist = () => {
  let wishlist = [];
  const storedBooks = localStorage.getItem("wishlist");
  if (storedBooks) {
    wishlist = JSON.parse(storedBooks);
  }
  return wishlist;
};

export const saveWishlist = (book) => {
  let books = getBooks();
  let wishlist = getWishlist();
  const isExists = books.find((b) => b.bookId === book.bookId);
  const isAddedWishlist = wishlist.find((w) => w.bookId === book.bookId);
  if (isExists || isAddedWishlist) {
    return toast.error("Already Added to Readlist");
  } else {
    wishlist.push(book);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Successfully Added to Wishlist");
  }
};
