import { useSelector } from "react-redux";
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";

const Body = () => {
  const showSideBar = useSelector((store) => store.app.showSideBar);
  return (
    <div>
      <Header />
      <div className="flex">
        {showSideBar && <Sidebar />}
        <Home />
      </div>
    </div>
  );
};

export default Body;
