import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className="mb-3 position-sticky top-0">
      <nav className="navbar navbar-light bg-light navbar-expand-lg shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Blog | Liridon Loku
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
