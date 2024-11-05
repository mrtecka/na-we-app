import "./PostCard.scss";
import naweIcon from "../../assets/icons/nawe.svg";
import likeIcon from "../../assets/icons/like.svg";
import avatar from "../../assets/images/jdough.jpg";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import CommentSection from "../CommentSection/CommentSection";
import { Link } from "react-router-dom";
import { timeAGo } from "../../utils/timeAGo";

export default function PostCard({ caption, media, id, posts, dateTime }) {
  const timestamp = timeAGo(dateTime);

  return (
    <article className="pc">
      <div className="pc-container">
        <div className="pc__metadata">
          <img src={avatar} alt="" className="pc__metadata-avatar" />
          <div className="pc__metadata-container">
            <span className="pc__metadata-text">Tecka B</span>
            <span className="pc__metadata-text--other">{timestamp}</span>
          </div>
          <img src="" alt="" className="pc__metadata-icon" />
        </div>
        <span className="pc__caption">{caption}</span>
        <img src={media} alt="" className="pc__media" />
        <div className="pc__actions">
          <img src={likeIcon} alt="Thumbs Up" className="pc__actions-icon" />
          <Link to="/projects/new">
            <img src={naweIcon} alt="" className="pc__actions-icon" />
          </Link>
          <img src={bookmarkIcon} alt="Bookmark" className="pc__actions-icon" />
        </div>
        <CommentSection postId={id} posts={posts} />
      </div>
    </article>
  );
}
