import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `sangwonme-io`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: ['src/styles'],
        },
        cssLoaderOptions: {
          camelCase: false,
          modules: {
            localIdentName: '[name]__[local]__[hash:base64:5]',
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `publication`,
        path: `${__dirname}/src/_content/publication`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `archive`,
        path: `${__dirname}/src/_content/archive`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `diary`,
        path: `${__dirname}/src/_content/diary`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ]
}

export default config
