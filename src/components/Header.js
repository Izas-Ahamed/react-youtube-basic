import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { addCacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cachedResults = useSelector((store) => store.search.cachedResults);
  useEffect(() => {
    //cache check
    if (cachedResults[searchQuery]) {
      setSearchResults(cachedResults[searchQuery]);
      return;
    }
    //debouncing
    const timer = setTimeout(getSearchSuggestions, 150);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const json = await data.json();
    dispatch(addCacheResults({ [searchQuery]: json[1] }));
    setSearchResults(json[1]);
  };
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
      <div className="col-span-3 flex flex-col relative">
        <div className="w-full text-center flex">
          <input
            type="text"
            className="border border-gray-400 rounded-l-full w-full mr-0 p-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => setShowSuggestions(false)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button className="px-4 bg-gray-100 border border-gray-400 border-r-50 rounded-r-full col-span-2  ml-0">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="bg-white top-12 z-20 absolute w-full rounded-xl  shadow-lg">
            <ul>
              {searchResults.map((suggestion) => (
                <li className="bg-white hover:bg-gray-50 p-4 rounded-xl ">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2"></div>
      <div className="col-span-1 text-center ">
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
