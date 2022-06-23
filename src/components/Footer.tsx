import React from "react";
import { Github, Dev, Linkedin } from "@styled-icons/fa-brands";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer
      className="text-center text-white mt-4"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div className="container pt-4">
        <section className="mb-0">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://liridonloku.vercel.app"
            role="button"
          >
            <Dev size={24} color={"#333"} />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://linkedin.com/in/liridonloku"
            role="button"
          >
            <Linkedin size={24} color={"#333"} />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/liridonloku"
            role="button"
          >
            <Github size={24} color={"#333"} />
          </a>
        </section>
      </div>

      <div
        className="text-center text-dark p-3 d-flex justify-content-center align-items-center"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-dark nav-link" href="https://github.com/liridonloku">
          Liridon Loku
        </a>
      </div>
    </footer>
  );
};

export default Footer;
