import { useEffect, useState } from "react";
import { VideoCard } from "./VideoCard";
import { YT_VIDEO_LIST_API_URL } from "../utils/constants";

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
  };

  return (
    <div className="flex flex-wrap justify-center">
      {videosData.length > 0 && (
        <>
          {videosData.map((video) => (
            <VideoCard key={video.id} data={video} />
          ))}
        </>
      )}
    </div>
  );
};

export default VideoList;
