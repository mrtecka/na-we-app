import "./CommentForm.scss";
import { useState, useEffect } from "react";
import avatar from "../../assets/images/spidy.jpg";
import planeIcon from "../../assets/icons/paper-plane.svg";
import { addComment } from "../../utils/apiCalls";

export default function CommentForm({ postId, fetchComments }) {
  const [commentInput, setCommentInput] = useState("");
  const [commentInputValidation, setCommentInputValidation] = useState(true);

  const handleCommentChange = (event) => {
    const input = event.target.value;
    if (input.length >= 1) {
      setCommentInputValidation(true);
    }
    setCommentInput(input);
  };

  const handlePostComment = (event) => {
    event.preventDefault();

    if (!commentInput) {
      setCommentInputValidation(false);
      return;
    }

    const commentObject = {
      comment: commentInput,
    };

    const postComment = async () => {
      await addComment(postId, commentObject);
      setCommentInput("");
      fetchComments();
    };

    postComment();
  };

  return (
    <form onSubmit={handlePostComment} action="" className="comment-form">
      <img src={avatar} className="comment-form__avatar" />
      <input
        onChange={handleCommentChange}
        type="text"
        placeholder="How does this impact you?"
        className={`comment-form__input ${
          !commentInputValidation ? "comment-form__input--validate" : ""
        }`}
        value={commentInput}
      />
      <button className="comment-form__button" type="Submit">
        <img src={planeIcon} alt="" className="comment-form__button-icon" />
      </button>
    </form>
  );
}
