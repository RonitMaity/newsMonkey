import React, { Component } from 'react';
import waiting from '../assets/waiting-7579_256.gif'

export default class Spinner extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center">
        <img  src={waiting} alt="fireSpot"/>
      </div>
    )
  }
}
