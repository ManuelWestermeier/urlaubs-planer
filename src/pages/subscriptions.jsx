import RequestAuth from "../components/request-auth";
import React from "react";
import { useAuth } from "../providers/auth";

export default function Subscriptions() {
  const auth = useAuth();

  if (!auth.isAuthenticated) return <RequestAuth />;

  return <div>Subscriptions Page</div>;
}
