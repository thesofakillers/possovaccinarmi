module.exports = {
  siteMetadata: {
    title: "Posso Vaccinarmi?",
    siteUrl: "https://possovaccinarmi.it",
    description:
      "Controlla se rientri nelle categorie a cui è disponibile il vaccino anti-COVID.",
    image: "/images/favicon.png",
    twitterUsername: "@thesofakillers",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-gdpr-cookies",
      options: {
        googleAnalytics: {
          trackingId: "UA-143281261-4",
        },
      },
    },
  ],
};
