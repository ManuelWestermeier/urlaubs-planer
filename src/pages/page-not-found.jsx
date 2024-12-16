import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTopScroll from "../hooks/use-top-scroll";

export default function PageNotFound() {
  useTopScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const [secounds, setSecounds] = useState(30);

  useEffect(() => {
    const timeOut = setInterval(
      () =>
        setSecounds((secounds) => {
          if (secounds == 0) {
            clearInterval(timeOut);
            navigate("/");
          }
          return secounds - 1;
        }),
      1000
    );
    return () => clearInterval(timeOut);
  }, []);

  return (
    <div>
      <h3>Seite existiert nicht</h3>
      <h4>404 Page not found</h4>
      <i>{location.pathname}</i>
      <h6>
        <Link to="/">zur Startseite</Link>
      </h6>{" "}
      <i>(sie werden in unter {secounds} Sekunden zur Startseite navigiert)</i>
    </div>
  );
}
