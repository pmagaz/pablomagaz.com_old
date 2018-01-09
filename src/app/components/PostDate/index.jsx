import React  from 'react'
import { PropTypes } from 'prop-types'

const propTypes= {
  date: PropTypes.string
}

const PostDate = ({ date }) => (
  <time>
    { date }
  </time>
)

PostDate.propTypes = propTypes

export default PostDate
