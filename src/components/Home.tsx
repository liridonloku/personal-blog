import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import { Post } from "../App";
import Footer from "./Footer";
import Hero from "./Hero";

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Header />
      <Hero />
      <Cards posts={posts} />
      <Footer />
    </>
  );
};

export default Home;
