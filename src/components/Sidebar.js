const Sidebar = () => {
  return (
    <div className="p-5 h-screen shadow-2xl w-48">
      <div>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
        <h1 className="font-bold pt-5">You </h1>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Your videos</li>
          <li>Your movies</li>
          <li>Watch later</li>
          <li>Your clips</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li> Music</li>
          <li> Sports</li>
          <li> Gaming</li>
          <li> Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
