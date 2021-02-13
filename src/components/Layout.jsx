import React from "react";
import { Helmet } from "react-helmet";
import SEO from "./Seo";
import "bulma/css/bulma.css";
import "./layout.css";

export const Layout = ({ children }) => {
  const mainClassNames = [
    "column",
    "is-narrow-tablet",
    "is-offset-1-mobile",
    "is-offset-2-tablet",
    "is-third-desktop",
    "is-offset-one-quarter-desktop",
    "vertical-center",
  ];
  return (
    <>
      <Helmet></Helmet>
      <SEO />
      <div className="columns is-mobile">
        <div className={mainClassNames.join(" ")}>{children}</div>
      </div>
    </>
  );
};
