import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap"; // You can use any carousel library

export default function Journey() {
  const { id } = useParams(); // Assuming the ID is passed via the URL

  // State to store the journey data
  const [journey, setJourney] = useState(null);

  // Placeholder data (this can be replaced with a real API call)
  const placeholderJourney = {
    title: "Placeholder Title",
    price: "€0.00",
    images: [
      { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
      { src: "https://via.placeholder.com/300x200", alt: "Image 2" },
    ],
    description: "This is a placeholder description.",
    author: { id: "author123", name: "Placeholder Author" },
    contactEmail: "example@example.com",
    contactPhone: "+123456789",
    bookingTime: "2024-12-31",
  };

  // Simulating fetching journey data based on ID (replace with real fetch logic)
  useEffect(() => {
    // Example: Fetch journey data from an API using the `id`
    // fetchJourneyData(id).then((data) => setJourney(data));

    // Using placeholder data in this example
    setJourney(placeholderJourney);
  }, [id]);

  if (!journey) {
    return <div>Loading...</div>; // You can show a loading spinner or message
  }

  const images = journey.images || [];
  const description = journey.description || "";
  const price = journey.price;
  const title = journey.title;
  const author = journey.author || "";
  const contactEmail = journey.contactEmail || "";
  const contactPhone = journey.contactPhone || "";
  const bookingTime = journey.bookingTime || "Unspecified";

  const renderDescription = () => {
    return description.split("\n").map((line, index) => (
      <p key={index}>
        {line.split(" ").map((word, idx) => {
          const emailRegex =
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
          const phoneRegex = /(\+?[0-9]{1,4}[\s-])?(\(?\d+\)?[\s-]?)?[\d\s-]+/;

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
          <h3>{price}</h3>

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
            <a href={`/profile/${author.id}`} className="btn-link">
              {author.name}
            </a>
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
            <a href={`/book/${id}`} className="btn btn-primary">
              Jetzt buchen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}