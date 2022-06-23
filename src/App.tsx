import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import axios from "axios";
import SinglePost from "./components/Post";

interface Props {}

export interface Author {
  firstName: string;
  lastName: string;
  email: string;
}

export interface Post {
  _id: string;
  title: string;
  poster: string;
  article: string;
  published: boolean;
  date: Date;
  author: Author;
}

const App: React.FC<Props> = () => {
  const [posts, setposts] = useState<Array<Post>>([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios({
        method: "get",
        url: "https://stark-bastion-85808.herokuapp.com/api/posts/",
      });
      setposts(response.data);
    };
    getPosts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
