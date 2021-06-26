import React from "react";

export const Footer = () => {
  return (
    <footer className="my-footer">
      <div className="columns is-centered">
        <div className="column is-offset-1-mobile is-narrow-tablet">
          Creato con{" "}
          <span role="img" aria-label="love">
            ♥️
          </span>{" "}
          da{" "}
          <a href="https://giuliostarace.com" target="_blank" rel="noreferrer">
            Giulio Starace
          </a>
        </div>
        <div className="column is-offset-1-mobile is-narrow-tablet">
          Source code su{" "}
          <a
            href="https://github.com/thesofakillers/possovaccinarmi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
