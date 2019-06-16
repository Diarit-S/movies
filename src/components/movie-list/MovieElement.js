import React, { Component } from 'react';

export default class MovieElement extends Component {

  render() {
    return (
      <div className="w-25  p-2">
        <div className="card">
          <img src="http://golem13.fr/wp-content/uploads/2018/11/Gladiator2-RidleyScott.jpg" className="card-img-top" alt="film"/>
          <div className="card-body">
            <h5 className="card-title">GLADIATOR</h5>
            <p className="card-text">Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire.</p>
          </div>
        </div>
      </div>
    );
  }
}