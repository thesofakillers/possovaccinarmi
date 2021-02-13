import React from "react";
import { WizardForm } from "../components/WizardForm";
import { Layout } from "../components/Layout";

export default () => (
  <Layout>
    <h1 className="title is-1 is-size-2-mobile">Posso Vaccinarmi?</h1>
    <WizardForm />
    <div className="pt-4">
      In base alle{" "}
      <a
        href="http://www.salute.gov.it/portale/nuovocoronavirus/dettaglioFaqNuovoCoronavirus.jsp?lingua=italiano&id=249"
        target="_blank"
        rel="noreferrer"
      >
        informazioni riportate sul sito ufficiale del Governo Italiano
      </a>
      .
    </div>
  </Layout>
);
