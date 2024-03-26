import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-[92%] max-w-7xl mx-auto">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
