import React from "react";
import { Helmet } from "react-helmet";
import { WizardForm } from "../components/WizardForm";

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Posso Vaccinarmi?</title>
      <link rel="canonical" href="https://possovaccinarmi.it" />
    </Helmet>
    <div style={{ margin: `1.45rem` }}>
      <h1>Posso Vaccinarmi?</h1>
      <WizardForm />
    </div>
  </div>
);
