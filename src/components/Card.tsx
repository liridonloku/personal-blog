import React from "react";
import { Post } from "../App";
import defaultImage from "../assets/images.png";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  post: Post;
}

const Card: React.FC<Props> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className="col-xl-3">
      <div className="card m-3 shadow-sm">
        <img
          src={post.poster ? post.poster : defaultImage}
          onError={(e) => {
            if (e.currentTarget.src !== defaultImage) {
              e.currentTarget.onerror = null;
              e.currentTarget.src = defaultImage;
            }
          }}
          className="card-img-top"
          alt="Post"
          onClick={() => {
            navigate(`./${post._id}`);
          }}
        />
        <div className="card-body">
          <h5 className="card-title">
            <Link className="navbar-brand text-dark" to={`./${post._id}`}>
              {post.title}
            </Link>
          </h5>
          <p className="card-text text-end">
            <small className="text-muted">
              {new Date(post.date).toUTCString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
