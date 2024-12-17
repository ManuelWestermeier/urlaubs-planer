import RequestAuth from "../components/request-auth";
import React from "react";
import { useAuth } from "../providers/auth";

export default function Create() {
  const auth = useAuth();

  if (!auth.isAuthenticated) return <RequestAuth />;

  return (
    <div>
      <h3>Erstelle Reisen und Inhalte</h3>
      <p>Kommt bald....</p>
    </div>
  );
}