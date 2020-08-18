import React, { Component, Fragment } from "react";

export default class Compteur extends Component {
  state = {
    valeur: 0
  };

  handleIncrementBtn = () => {
    this.setState({ valeur: this.state.valeur + 1 });
  };

  handleDecrementBtn = () => {
    this.setState({ valeur: this.state.valeur - 1 });
  };

  render() {
    return (
      <Fragment>
        <button
          onClick={() => this.handleIncrementBtn()}
          className={`${this.props.couleurInc} btn btn-lg p-1 m-2`}
        >
          Increment
        </button>
        <button
          onClick={() => this.handleDecrementBtn()}
          className={` ${this.props.couleurDec} btn btn-lg p-1 m-2 `}
        >
          Decrement
        </button>

        <h2>{this.state.valeur}</h2>
      </Fragment>
    );
  }
}
