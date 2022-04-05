import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";

export default function Error() {
  const { auth, setAuth } = useGlobalContext();

  // localStorage.removeItem("accessToken");

  return (
    <section className="error-page">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
}
