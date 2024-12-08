import { Link } from "react-router-dom";

export default function RequestAuth() {
  return (
    <div>
      <p>Wichtig:</p>
      <h5>
        Um diese Seite nutzen zu können
        <br />
        bitte einen{" "}
        <Link to="/profile/create-account">neuen Account erstellen</Link>
        <br /> oder sich <Link to="/profile/login">anmelden</Link>
      </h5>
    </div>
  );
}