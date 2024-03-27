import { getBooks } from "../Utils";
import { CustomBarChart } from "../Components/BarChart";

const PagesToRead = () => {
  const books = getBooks();
  return (
    <div>
      <h3>Pages to Read page</h3>
      <div className="w-[90%] md:w-[60%] mx-auto">
        <CustomBarChart books={books}></CustomBarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
