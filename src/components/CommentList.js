import Comment from "./Comment";

const CommentList = ({ data }) => {
  return (
    <div className="m-1 mr-0">
      {data.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="border border-white border-l-black m-0 ml-4">
            <CommentList key={index} data={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
