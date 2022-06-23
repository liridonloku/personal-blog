import React from "react";
import { Post } from "../App";
import Card from "./Card";

interface Props {
  posts: Post[];
}

const Cards: React.FC<Props> = ({ posts }) => {
  const renderCards = () => {
    return posts.map((post) => <Card key={post._id} post={post} />);
  };
  return (
    <main className="flex-grow-1">
      <h1 className="text-center">Posts</h1>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {posts.length > 0 ? (
          renderCards()
        ) : (
          <div className="text-center pt-5">
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
        )}
      </div>
    </main>
  );
};

export default Cards;
