import React  from 'react'
import { Link } from 'react-router'

import { SiteConf } from 'base'

const BlogTitle = () => (
  <Link to="/blog">
    { SiteConf.BlogTitle.toUpperCase() }
  </Link>
)

export default BlogTitle