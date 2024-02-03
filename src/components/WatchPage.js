import CommentList from "./CommentList";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="m-4 flex rounded-lg w-full">
        <div className="my-2">
          <iframe
            className="rounded-xl "
            src="https://www.youtube.com/embed/CD_0lqrbPqE?si=tx0tlnmTlZ0D7u6E&amp;controls=1;"
            width="900"
            height="514"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentList />
    </div>
  );
};

export default WatchPage;
