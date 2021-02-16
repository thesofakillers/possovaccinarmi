import React from "react";
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";
import SEO from "./Seo";
import { Footer } from "./Footer";
import "bulma/css/bulma.css";
import "./layout.css";

export const Layout = ({ children }) => {
  const mainClassNames = [
    "column",
    "is-offset-1-mobile",
    "is-narrow-tablet",
    "is-offset-1-tablet",
    "is-third-desktop",
    "is-offset-one-quarter-desktop",
  ];
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💉</text></svg>"
        />
      </Helmet>
      <SEO />
      <div className="main">
        <div className="columns py-6 my-2">
          <div className={mainClassNames.join(" ")}>{children}</div>
        </div>
        <CookieConsent
          location="bottom"
          buttonText="Consento"
          declineButtonText="Rifiuto"
          enableDeclineButton={true}
          cookieName="gatsby-gdpr-google-analytics"
          flipButtons={true}
        >
          Questo sito usa Cookies anonimizzati per scopi analitici.
        </CookieConsent>
        <Footer />
      </div>
    </>
  );
};
