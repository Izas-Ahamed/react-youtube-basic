import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import LiveChat from "./LiveChat";
import mockCommentData from "../mocks/mockComentData.json";

const WatchPage = () => {
  const [params] = useSearchParams();
  return (
    <div className="flex w-full">
      <div className="m-4 flex flex-col rounded-lg w-full">
        <div className="my-2">
          <iframe
            className="rounded-xl "
            src={
              "https://www.youtube.com/embed/" +
              params.get("v") +
              "?si=tx0tlnmTlZ0D7u6E&amp;controls=1;"
            }
            width="900"
            height="514"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="m-4">
          <h1 className="font-medium">Comments:</h1>
          <CommentList data={mockCommentData} />
        </div>
      </div>
      <div className="h-50 m-4 w-full">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
