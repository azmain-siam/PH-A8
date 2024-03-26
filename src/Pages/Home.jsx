import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Books from "../Components/Books";

const Home = () => {
  const books = useLoaderData();
  return (
    <div>
      <Banner />
      <Books books={books}/>
    </div>
  );
};

export default Home;
