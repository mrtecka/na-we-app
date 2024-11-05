import CommentCard from "../CommentCard/CommentCard";
import { useState, useEffect } from "react";
import { getPostComments, getAllPosts } from "../../utils/apiCalls";
import Loading from "../../components/Loading/Loading";
import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";

export default function CommentSection({ postId, posts }) {
  const [comments, setComments] = useState(null);
  const [threeComments, setThreeComments] = useState(null);

  const validPost = posts.find((post) => post.id === Number(postId));

  useEffect(() => {
    fetchComments();
  }, []);

  if (!validPost) {
    return <span>Please provide a valid Post ID</span>;
  }

  const fetchComments = async () => {
    const commentsData = await getPostComments(postId);
    const threeComments = commentsData.slice(0, 3);
    setComments(commentsData);
    setThreeComments(threeComments);
  };

  if (validPost && !comments) {
    return (
      <section>
        <span className="comments__text"> Be the first to respond</span>
        <CommentForm postId={postId} fetchComments={fetchComments} />
      </section>
    );
  }

  if (!comments) {
    return <Loading />;
  }

  return (
    <section className="comments">
      {threeComments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
      <span
        className={`comments__text ${
          comments.length < 3 ? "comments__text--hidden" : ""
        }`}
      >
        View all comments ({comments.length})
      </span>
      <CommentForm postId={postId} fetchComments={fetchComments} />
    </section>
  );
}
