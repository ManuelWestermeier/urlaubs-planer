import { Link } from "react-router-dom";

function RequestdAuthLink({ children, url = "/", title = "" }) {
  const isLoggedIn = false;

  return (
    <Link
      title={title ? title + " (login requred)" : "(login requred)"}
      to={isLoggedIn ? url : "/request-auth"}
    >
      {children}
    </Link>
  );
}

export default RequestdAuthLink;
