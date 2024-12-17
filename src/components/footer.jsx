import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Über uns</h5>
              <p>
                Wir bieten Ihnen maßgeschneiderte Reiseerlebnisse und
                unvergessliche Abenteuer an. Entdecken Sie die Welt mit uns!
              </p>
            </div>
            <div className="col-md-4">
              <h5>Wichtige Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about" className="text-white">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-white">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-white">
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Kontakt</h5>
              <ul className="list-unstyled">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@reiseplattform.de"
                    className="text-white"
                  >
                    info@reiseplattform.de
                  </a>
                </li>
                <li>
                  <strong>Telefon:</strong>{" "}
                  <a href="tel:+491234567890" className="text-white">
                    +49 123 456 7890
                  </a>
                </li>
                <li>
                  <strong>Adresse:</strong> Musterstraße 1, 12345 Berlin,
                  Deutschland
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2024 Reiseplattform. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
      <br />
      <br />
      <br />
    </>
  );
}
