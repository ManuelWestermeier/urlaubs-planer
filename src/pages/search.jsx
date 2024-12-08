import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const testData = [
  {
    id: 1,
    title: "Bergwanderung im Harz",
    location: "Harz, Deutschland",
    price: "249 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Strandurlaub auf Mallorca",
    location: "Mallorca, Spanien",
    price: "799 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Safari in Kenia",
    location: "Nairobi, Kenia",
    price: "2.199 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Städtetrip nach Paris",
    location: "Paris, Frankreich",
    price: "599 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Skifahren in den Alpen",
    location: "Alpen, Österreich",
    price: "1.099 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "Roadtrip durch Kalifornien",
    location: "Kalifornien, USA",
    price: "3.499 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 7,
    title: "Wellness-Wochenende",
    location: "Schwarzwald, Deutschland",
    price: "349 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 8,
    title: "Kreuzfahrt in der Karibik",
    location: "Karibik",
    price: "2.999 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 9,
    title: "Entdeckungsreise in Japan",
    location: "Kyoto, Japan",
    price: "4.299 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 10,
    title: "Abenteuer in Australien",
    location: "Sydney, Australien",
    price: "3.899 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 11,
    title: "Segeltörn in Kroatien",
    location: "Dalmatien, Kroatien",
    price: "1.699 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 12,
    title: "Nordlichter in Island",
    location: "Reykjavik, Island",
    price: "2.499 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 13,
    title: "Kulturreise nach Rom",
    location: "Rom, Italien",
    price: "899 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 14,
    title: "Trekking in Nepal",
    location: "Himalaya, Nepal",
    price: "3.199 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
  {
    id: 15,
    title: "Luxusresort auf den Malediven",
    location: "Malediven",
    price: "5.499 €",
    coverImage: "https://via.placeholder.com/300x200",
  },
];

export default function SearchJourneys() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); // Number of items to render initially
  const [journeys, setJourneys] = useState(testData);

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
            type="text"
            className="form-control mb-4"
            placeholder="Suche nach Reisen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="row">
            {visibleJourneys.map((journey) => (
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
