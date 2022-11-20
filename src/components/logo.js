import React from "react";
import { logo, logoLink } from "./logo.module.css";
import { Link } from "gatsby";

function Logo({ fontSize = 32 }) {
  return (
    <Link className={logoLink} to={"/blog"}>
      <span className={logo} style={{ fontSize }}></span>
    </Link>
  );
}

export default Logo;
