import { getBooks } from "../Utils";
import { CustomBarChart } from "../Components/BarChart";

const PagesToRead = () => {
  const books = getBooks();
  return (
    <div className="work-sans">
      <div className="w-[95%] md:w-[70%] md:mx-auto text-xs md:text-sm">
        <CustomBarChart books={books}></CustomBarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
