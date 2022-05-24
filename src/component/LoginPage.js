import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import Loading from "../FormPages/Loading";
import api from "../Api/Api";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    users,
    setUsers,
    auth,
    setAuth,
    form,
    setForm,
    updateForm,
    setUpdateForm,
    loading,
    setLoading,
  } = useGlobalContext();

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = { username: username, password: password };

      api.post("registerform/login/", data).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.data.token);
          setAuth((prev) => {
            return {
              ...prev,
              username: response.data.username,
              id: response.data.id,
              status: true,
            };
          });

          navigate(`/homepage/`);
        }
      });
      setLoading(false);
    } catch (error) {
      alert("No Data Available");
    }
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="container text-center">
      <h1>Sign in</h1>
      <form onSubmit={login}>
        <div className="form-group">
          <label>
            <h5>Login</h5>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            className="form-control"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>

        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/form">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
