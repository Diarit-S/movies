import React, { Component } from 'react';

export default class MovieDetails extends Component {

  render() {
    return (

      <div className="w-25 border p-3 d-flex flex-column">
        <h5>{this.props.movie.title}</h5>
        <hr className="w-100"/>
        <div className="w-100 d-flex">
          <img className="w-50 mx-auto" src={this.props.movie.img} alt="film"/>
        </div>
        <hr className="w-100"/>
        <p className="text-secondary mb-0">{this.props.movie.details}</p>
        <hr className="w-100"/>
        <p>{this.props.movie.description}</p>
      </div>
    
    )
  }
}