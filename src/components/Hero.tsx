import React from "react";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Welcome to my blog</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            It's a bit empty right now, but I hope to get some articles in here.
            I've never been much of a writer, but I want to try and keep a
            record of my journey in software development, and the things I learn
            along the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
