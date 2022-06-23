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
        {renderCards()}
      </div>
    </main>
  );
};

export default Cards;
