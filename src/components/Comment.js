const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="bg-gray-200 p-2 rounded-md">
      <div className="flex ">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user_logo"
          className="h-8 m-2 "
        />
        <div>
          <h1 className="font-medium">{name}</h1>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
