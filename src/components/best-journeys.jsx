import React from "react";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "../components/loading-spinner";
import getUrl from "../utils/get-url";
import useFetch from "../hooks/use-fetch";

export default function BestJourneys() {
  const [journeys, state] = useFetch(getUrl("/best-journeys"));

  if (state == "error")
    return (
      <div>
        Fehler beim Laden der Reisen{" "}
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            location.reload();
          }}
        >
          Neu laden
        </a>
      </div>
    );

  if (!journeys) return <LoadingSpinner />;

  if (!Array.isArray(journeys) || journeys.length === 0)
    return <div>Keine Reisen verfügbar.</div>;

  return (
    <div className="row">
      <h3>beste Angebote</h3>
      {state == "loading" && <LoadingSpinner />}
      {journeys.map((journey) => (
        <div key={journey.id} className="col-md-4 mb-4">
          <div className="card">
            <img
              src={journey.coverImage}
              className="card-img-top"
              alt={journey.title}
            />
            <div className="card-body">
              <h5 className="card-title">{journey.title}</h5>
              <p className="card-text">Ort: {journey.location}</p>
              <p className="card-text">Preis: {journey.price}</p>
              <NavLink
                to={`/journey/${journey.id}`}
                className="btn btn-primary"
              >
                Details anzeigen
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
