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
      <Helmet htmlAttributes={{ lang: "it" }}>
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
          location="top"
          overlay={true}
          buttonText="Ho capito"
          disableButtonStyles={true}
          buttonClasses="my-3 mx-4 button is-info"
          cookieName="gatsby-gdpr-google-analytics"
        >
          <h2>Avviso GDPR</h2>
          Questo sito utilizza cookie di Google per erogare i propri servizi e
          per analizzare il traffico. Il tuo indirizzo IP verrà condiviso in
          modo anonimizzato con Google, unitamente alle metriche sulle
          prestazioni e sulla sicurezza, per garantire la qualità del servizio,
          generare statistiche di utilizzo e rilevare e contrastare eventuali
          abusi.
        </CookieConsent>
        <Footer />
      </div>
    </>
  );
};
