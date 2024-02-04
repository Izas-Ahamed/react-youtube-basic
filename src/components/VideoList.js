import { useEffect, useState } from "react";
import { VideoCard } from "./VideoCard";
import { YT_VIDEO_LIST_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoList = () => {
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(
      YT_VIDEO_LIST_API_URL + process.env.REACT_APP_YT_API_KEY
    );
    const json = await data.json();
    setVideosData(json?.items);
    console.log(json);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {videosData.length > 0 && (
        <>
          {videosData.map((video) => (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCard data={video} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default VideoList;
