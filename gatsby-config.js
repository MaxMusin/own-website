require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Hey, my name is Maxime`,
    titleTemplate: "%s · Maxime Musin",
    url: `https://maximemusin.me`,
    description: ``,
    image: `/images/max_header.png`,
    twitterUsername: `@MaximeMusin`,

  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maxime Musin`,
        short_name: `Maxime Musin`,
        description: `Maxime Musin - freelance Front-End Developer & UX/UI Designer`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: `none`
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        minify: false,
        transpileTemplateLiterals: false,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION,
      },
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: process.env.COSMIC_BUCKET,
        objectTypes: ['posts', 'settings'],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY,
        },
        localMedia: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID,
        head: true,
      },
    },
  ],
}
