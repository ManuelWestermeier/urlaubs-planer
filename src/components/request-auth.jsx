import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth";

export default function RequestAuth() {
  const naviagte = useNavigate();
  const auth = useAuth();

  if (auth.isAuthenticated) {
    naviagte("/");
  }

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
