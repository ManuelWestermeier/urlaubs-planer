import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const isLoggedIn = false;

  return (
    <div>
      <h3>
        Erstelle Reisen,
        <br />
        Poste und Inhalte,
        <br />
        Spare Zeit!
      </h3>
      {!isLoggedIn && (
        <h5>
          <br />
          1. <Link to="/profile/create-account">
            Acount Erstellen
          </Link> oder <Link to="/profile/login">Anmelden</Link>
          <br />
          <br />
        </h5>
      )}
      <ul>
        <li>
          <Link to="/search">Nach Reisen suchen</Link>
        </li>
        <li>
          <Link to="/search">Nutzer finden</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/profile">Dein profiel Bearbeiten</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/profile">Reisen erstellen</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
