const path = require('path')
module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        images: path.join(__dirname, 'src/images'),
        theme: path.join(__dirname, 'src/theme'),
        components: path.join(__dirname, 'src/components')
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'trackId'
      }
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'bucketname'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    }
  ]
}
