import React from 'react'
import { Link } from 'gatsby'

import { Layout, Header, SEO } from '../components'

const MainPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Header />
      <Link to='/page-2/'>Go to page 2</Link>
    </Layout>
  )
}

export default MainPage
