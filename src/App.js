import React from "react";
import "./styles.css";
import Utilisateurs from "./components/utilisateurs";
import Compteur from "./components/compteur";

export default function App() {
  return (
    <div className="container">
      <Utilisateurs />
      <Compteur couleurInc="btn-primary" couleurDec="btn-warning" />
      <Compteur couleurInc="btn-info" couleurDec="btn-danger" />
      <Compteur couleurInc="btn-success" couleurDec="btn-secondary" />
    </div>
  );
}
