import React from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap"; // You can use any carousel library
import useFetch from "../hooks/use-fetch";
import getUrl from "../utils/get-url";
import LoadingSpinner from "../components/loading-spinner";

export default function Journey() {
  const { id } = useParams(); // Assuming the ID is passed via the URL

  // State to store the journey data
  const [journey, state] = useFetch(getUrl(`/journey/${id}`));

  if (state == "error") {
    return (
      <div>
        Fehler beim Laden der Reisedaten{" "}
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
  }

  if (!journey) {
    return <LoadingSpinner />; //<div>Loading...</div>; // You can show a loading spinner or message
  }

  const images = journey.images || [];
  const description = journey.description || "";
  const price = journey.price;
  const title = journey.title;
  const author = journey.author || "";
  const contactEmail = journey.contactEmail || "";
  const contactPhone = journey.contactPhone || "";
  const bookingTime = journey.bookingTime || "Unbestimmt";

  const renderDescription = () => {
    return description.split("\n").map((line, index) => (
      <p key={index}>
        {line.split(" ").map((word, idx) => {
          const emailRegex =
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
          const phoneRegex =
            /(?:\+?\d{1,4}[^\d\s]?)?(\(?\d+\)?[\s-]?)?[\d\s-]{5,}/;
          const urlRegex = /https?:\/\/[^\s]+/; // Regex to match URLs starting with http:// or https://

          if (emailRegex.test(word)) {
            return (
              <a href={`mailto:${word}`} key={idx}>
                {word}
              </a>
            );
          }

          if (phoneRegex.test(word)) {
            return (
              <a href={`tel:${word}`} key={idx}>
                {word}
              </a>
            );
          }

          if (urlRegex.test(word)) {
            return (
              <a
                href={word}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                {word}
              </a>
            );
          }

          return word + " ";
        })}
      </p>
    ));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1>{title}</h1>
          <h3>{price} €</h3>

          {/* Image slider */}
          <Carousel>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="d-block w-100"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="mt-4">
            <h4>Beschreibung:</h4>
            {renderDescription()}
          </div>

          {/* Author Link */}
          <p>
            <strong>Autor:</strong>{" "}
            <Link to={`/profile/${author.id}`} className="btn-link">
              {author.name}
            </Link>
          </p>

          {/* Contact Information */}
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
          <p>
            <strong>Telefon:</strong>{" "}
            <a href={`tel:${contactPhone}`}>{contactPhone}</a>
          </p>

          {/* Booking Information */}
          <p>
            <strong>Buchbar bis:</strong> {bookingTime}
          </p>

          {/* Booking Button */}
          <div className="text-center mt-4">
            <Link to={`/book/${id}`} className="btn btn-primary">
              Jetzt buchen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
