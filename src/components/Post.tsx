import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Post } from "../App";
import parse from "html-react-parser";
import dompurify from "dompurify";
import defaultImage from "../assets/images.png";
import Comments from "./Comments";

interface Props {
  posts: Post[];
}

const SinglePost: React.FC<Props> = ({ posts }) => {
  const [post, setpost] = useState<null | Post>();
  const { id } = useParams();

  useEffect(() => {
    const getPost = () => {
      const newPost = posts.find((post) => post._id.toString() === id);
      setpost(newPost);
    };
    getPost();
  }, [id, posts]);

  const htmlFrom = (htmlString: string) => {
    const cleanHtmlString = dompurify.sanitize(htmlString, {
      USE_PROFILES: { html: true },
    });
    const html = parse(cleanHtmlString);
    return html;
  };

  return (
    <>
      <Header />
      {post && (
        <div className="container-sm mb-4">
          <h1 className="text-center mb-3">{post.title}</h1>
          <p className="text-secondary mb-1">
            {new Date(post.date).toDateString()}
          </p>
          <div className="post-image d-flex justify-content-center mb-3">
            <img src={post.poster || defaultImage} alt="" />
          </div>
          {htmlFrom(post.article)}
          <hr className="mt-5" />
          <Comments post={post} />
        </div>
      )}
    </>
  );
};

export default SinglePost;
