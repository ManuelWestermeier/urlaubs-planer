import React from "react";
import { Link } from "react-router-dom";
import useTopScroll from "../hooks/use-top-scroll";

export default function Home() {
  useTopScroll();
  const isLoggedIn = false; // Update based on actual login state

  return (
    <div className="container py-5">
      <header className="hero-header text-center mb-4">
        <h1 className="display-4">
          Erstelle Reisen, Poste und Spare Zeit!
        </h1>
        <p className="lead">
          Entdecke, erstelle und teile unvergessliche Reiseerlebnisse.
        </p>
      </header>

      {!isLoggedIn && (
        <section className="mb-5">
          <h5 className="text-center">
            Du hast noch kein Konto?{" "}
            <Link to="/profile/create-account" className="btn btn-link">
              Account Erstellen
            </Link>{" "}
            oder{" "}
            <Link to="/profile/login" className="btn btn-link">
              Anmelden
            </Link>
          </h5>
        </section>
      )}
      <br />
      <section className="mb-4">
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/search" className="btn btn-outline-primary w-100">
              Nach Reisen suchen
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/search" className="btn btn-outline-primary w-100">
              Nutzer finden
            </Link>
          </li>
          {isLoggedIn && (
            <>
              <li className="list-group-item">
                <Link to="/profile" className="btn btn-outline-primary w-100">
                  Dein Profil bearbeiten
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="/create-journey"
                  className="btn btn-outline-primary w-100"
                >
                  Reisen erstellen
                </Link>
              </li>
            </>
          )}
        </ul>
      </section>
    </div>
  );
}
