module.exports = {
  siteMetadata: {
    title: "Posso Vaccinarmi?",
    siteUrl: "https://possovaccinarmi.it",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Posso Vaccinarmi?",
        short_name: "possovaccinarmi",
        start_url: "/",
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
  ],
};
