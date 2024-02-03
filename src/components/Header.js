import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-flow-col p-3 w-full shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          className="h-6 m-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="hamburger_icon"
          onClick={() => dispatch(toggleSideBar())}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="yt_logo"
          className="h-8 "
        />
      </div>
      <div className="col-span-10 text-center flex">
        <input
          type="text"
          className="border border-gray-400 rounded-l-full m-1 w-1/2 mr-0"
        />
        <button className="px-4 bg-gray-100 border border-gray-400 border-r-50 rounded-r-full col-span-2 m-1 ml-0">
          🔍
        </button>
      </div>
      <div className="col-span-1 ">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user_logo"
          className="h-8 m-2 "
        />
      </div>
    </div>
  );
};

export default Header;
