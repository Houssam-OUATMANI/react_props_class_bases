import React, { Component, Fragment } from "react";
import { getUsers } from "../services/api";

export default class Utilisateurs extends Component {
  state = {
    utilisateurs: getUsers()
  };

  handleDeleteUser = (utilisateur) => {
    const utilisateurs = this.state.utilisateurs.filter(
      (u) => u.id !== utilisateur.id
    );
    this.setState({ utilisateurs });
  };

  render() {
    if (this.state.utilisateurs.length === 0) {
      return (
        <h1 className="text-danger">There are no users in the database</h1>
      );
    }
    return (
      <Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Identifiant</th>
              <th>Name</th>
              <th>Age</th>
              <th>Job</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.utilisateurs.map((utilisateur) => (
              <tr key={utilisateur.id}>
                <th>{utilisateur.id}</th>
                <td>{utilisateur.name}</td>
                <td>{utilisateur.age}</td>
                <td>
                  <strong className="text-danger">
                    {utilisateur.job.toLocaleUpperCase()}
                  </strong>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDeleteUser(utilisateur)}
                    className="btn btn-warning btn-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="5">
                Total of users :{" "}
                <h2 className="text-primary">
                  {this.state.utilisateurs.length}
                </h2>
              </th>
            </tr>
          </tfoot>
        </table>
      </Fragment>
    );
  }
}
