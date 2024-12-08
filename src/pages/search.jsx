import React, { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/loading-spinner";
import useFetch from "../hooks/use-fetch";
import getUrl from "../utils/get-url";
import BestJourneys from "../components/best-journeys";

export default function SearchJourneys() {
  const [_searchTerm, _setSearchTerm] = useSearchParams({ search: "" });
  const [searchTerm, setSearchTerm] = [
    _searchTerm.get("search"),
    (data) => _setSearchTerm({ search: data }),
  ];
  const [visibleCount, setVisibleCount] = useState(6); // Number of items to render initially
  const [journeys, state] = useFetch(
    getUrl(`/search-journeys`, {
      search: searchTerm,
    }),
    []
  );

  const filteredJourneys = journeys.filter((journey) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      journey.title.toLowerCase().includes(searchLower) ||
      journey.location.toLowerCase().includes(searchLower) ||
      journey.price.toLowerCase().includes(searchLower)
    );
  });

  const visibleJourneys = filteredJourneys.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Increment by 6 or any number
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <input
            autoFocus
            type="text"
            className="form-control mb-4"
            placeholder="Suche nach Reisen/Orten/Preisen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="row">
            {state == "error" && (
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
            )}
            {state == "loading" && <LoadingSpinner />}
            {visibleJourneys == 0 && <p>keine Ergebnisse für diese Suche</p>}
            {!searchTerm.trim() ? (
              <BestJourneys />
            ) : (
              visibleJourneys.map((journey) => (
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
              ))
            )}
          </div>
          {visibleCount < filteredJourneys.length && (
            <div className="text-center mt-4">
              <button onClick={handleViewMore} className="btn btn-secondary">
                Mehr anzeigen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
