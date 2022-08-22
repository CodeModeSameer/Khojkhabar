// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Newsitem extends Component {
  // static propTypes = {}

  render() {
    let {title , description , imageUrl , newsUrl , source , date} = this.props
    return (
        // <div className="container my-3">
        // <h2>Top headlines of a day</h2>
        <div className='my-3'>
        <div className="card">
      <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png" : imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p class="card-text"><small class="text-muted">Source: {source} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
      </div>
    </div>
    </div>
    )
  }
}

export default Newsitem