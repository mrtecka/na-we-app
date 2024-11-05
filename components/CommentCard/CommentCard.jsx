import "./CommentCard.scss";
import avatar from "../../assets/images/mandy.jpg";

export default function CommentCard({ comment }) {
  return (
    <article className="comment-card">
      <img src={avatar} className="comment-card__avatar" />
      <span className="comment-card__comment">{comment.comment}</span>
    </article>
  );
}
