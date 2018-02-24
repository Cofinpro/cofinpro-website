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
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'niza6hilizwt',
        accessToken:
          'a704fc9382cff5b6845fcf5bfe9c60bd55613437cd05898442c7c4e820e1a0bd',
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-111444132-1',
        anonymize: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
  ],
}
