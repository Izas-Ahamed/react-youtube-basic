import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  const showSideBar = useSelector((store) => store.app.showSideBar);
  return (
    <div>
      <div className="flex">
        {showSideBar && <Sidebar />} <Outlet />
      </div>
    </div>
  );
};

export default Body;
