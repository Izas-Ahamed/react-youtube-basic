export const VideoCard = ({ data }) => {
  const { title, thumbnails, channelTitle } = data?.snippet;
  const { viewCount } = data?.statistics;
  return (
    <div className="m-2 p-2 rounded-xl shadow-lg w-72 cursor-pointer">
      <img src={thumbnails.medium.url} alt="yt_video" className="rounded-xl " />
      <h2 className="font-medium py-2">{title}</h2>
      <p>{channelTitle}</p>
      <p>{viewCount} views</p>
    </div>
  );
};
