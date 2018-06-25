module.exports = {
  siteMetadata: {
    title: 'Cofinpro Karriere Seite',
    description:
      'Wir sind sehr stolz darauf, dass wir unseren Mitarbeitern ein optimales Arbeitsu' +
      'mfeld bieten können. Starten Sie jetzt Ihre Karriere bei Cofinpro.',
    url: 'https://www.karriere-cofinpro.de',
    author: 'Benjamin Tenke',
    twitter: 'cofinpro_ag',
    siteUrl: `https://www.karriere-cofinpro.de`,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
}
