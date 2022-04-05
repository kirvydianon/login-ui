import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { users, setUsers } = useGlobalContext();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { username: username, email: email, password: password };

    axios
      .post("https://project-login-triageform.herokuapp.com/registerform", data)
      .then(() => {
        navigate("/login");
      });
  };

  return (
    <div className="container text-center">
      <h1>Join us</h1>
      <h5>Create your personal account</h5>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Create Account</label>
          <input
            type="text"
            name="name"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <button id="sub_btn" type="submit">
            Register
          </button>
        </div>
      </form>
      <footer>
        <p>
          <Link to="/">Back to HomePage</Link>
        </p>
      </footer>
    </div>
  );
}

export default RegisterPage;
