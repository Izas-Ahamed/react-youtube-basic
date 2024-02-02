import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default Body;
