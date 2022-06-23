import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Post } from "../App";
import parse from "html-react-parser";
import dompurify from "dompurify";
import defaultImage from "../assets/images.png";
import Comments from "./Comments";

interface Props {}

const SinglePost: React.FC<Props> = () => {
  const [post, setpost] = useState<null | Post>();
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `https://stark-bastion-85808.herokuapp.com/api/posts/${id}`,
        });
        setpost(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
  }, [id]);

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
          <div className="post-image d-flex justify-content-center mb-3">
            <img src={post.poster || defaultImage} alt="" />
          </div>
          <h1 className="text-center mb-3">{post.title}</h1>
          {htmlFrom(post.article)}
          <p className="text-center">
            Status:{" "}
            {post.published ? (
              <span className="text-success fw-bold">Published</span>
            ) : (
              <span className="text-danger fw-bold">NOT Published</span>
            )}
          </p>
          <hr />
          <Comments post={post} />
        </div>
      )}
    </>
  );
};

export default SinglePost;
