import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {}

  render() {
    return (
        <>
        <div>News</div>
        <NewsItem title="myTitle" description = "myDesc"/>
        </>
    )
  }
}

export default News