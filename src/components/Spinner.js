import React, { Component } from 'react'
import load from './load.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={load} alt="loading" />
      </div>
    )
  }
}

export default spinner
