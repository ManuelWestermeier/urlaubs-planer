import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Benutzername und Passwort sind erforderlich.");
      return;
    }

    // Perform account creation logic here
    console.log("Konto erstellt:", { username, password });
    setError(""); // Clear the error on success
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Konto erstellen</h3>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Benutzername
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Passwort
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Konto erstellen
                  </button>
                </div>
              </form>

              <div className="mt-3 text-center">
                <NavLink to="/profile/create-account" className="btn btn-link">
                  Konto erstellen
                </NavLink>
                <NavLink to="/profile/login" className="btn btn-link">
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
