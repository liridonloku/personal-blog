import axios from "axios";
import React, { useEffect, useState } from "react";
import { Post } from "../App";
import { useForm } from "react-hook-form";
import SingleComment from "./SingleComment";
import { v4 as uuidv4 } from "uuid";

interface Props {
  post: Post;
}

export interface Comment {
  _id: string;
  post: string;
  userName: string;
  content: string;
  date: Date;
}

const Comments: React.FC<Props> = ({ post }) => {
  const { register, handleSubmit, reset } = useForm();
  const [comments, setcomments] = useState<Comment[]>([]);

  const [loadingComments, setloadingComments] = useState(false);
  const [postingComment, setpostingComment] = useState(false);

  useEffect(() => {
    const getComments = () => {
      setloadingComments(true);
      setTimeout(async () => {
        try {
          const response = await axios({
            method: "get",
            url: `https://stark-bastion-85808.herokuapp.com/api/posts/${post._id}/comments`,
          });
          setcomments(response.data);
          setloadingComments(false);
        } catch (err) {
          console.error(err);
          setloadingComments(false);
        }
      }, 250);
    };
    getComments();
  }, [post._id]);

  const onSubmit = async (data: any, e: any) => {
    setpostingComment(true);
    try {
      await axios({
        method: "post",
        url: `https://stark-bastion-85808.herokuapp.com/api/posts/${post._id}/comments`,
        data: {
          userName: data.userName,
          content: data.content,
        },
      });
      const newComment = {
        userName: data.userName,
        content: data.content,
        post: post._id,
        _id: uuidv4(),
        date: new Date(Date.now()),
      };
      setcomments([newComment, ...comments]);
      reset();
      setpostingComment(false);
    } catch (err) {
      console.error(err);
      setpostingComment(false);
    }
  };

  return (
    <>
      <h2 className="text-center">Comments</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            {...register("userName")}
            id="userName"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Comment
          </label>
          <textarea
            rows={4}
            {...register("content")}
            id="content"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3 text-center">
          {postingComment ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button type="submit" className="btn btn-primary px-4">
              Post Comment
            </button>
          )}
        </div>
      </form>
      <hr />
      {loadingComments ? (
        <div className="text-center">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))
      )}
    </>
  );
};

export default Comments;
