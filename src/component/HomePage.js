import axios from "axios";
import QRCode from "qrcode";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";

function HomePage() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState("");

  const todayDate = new Date().toJSON().split("T")[0];
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  const { auth, setAuth, users, setUsers, form, setForm } = useGlobalContext();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/updateForm/updateId/${id}`)
      .then((response) => {
        if (response.data == null) {
          navigate(`/updateform/${id}`);
        } else {
          setForm(response.data);
        }
      });
    axiosInstance.get(`registerform/byId/${id}`).then((response) => {
      setUsers(response.data);
    });

    QRCode.toDataURL(id).then((data) => {
      setImage(data);
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuth({ status: false, id: 0, firstname: "", successfull: true });
  };

  return (
    <div>
      <div className="navbar">
        <div className="loggedInContainer">
          <h4>Welcome {users.username}</h4>
          {auth.status && (
            <Link to="/login">
              <button onClick={logout}>Logout</button>
            </Link>
          )}
        </div>
      </div>
      <div className="wrapper-field">
        <a href={image} download className="a-field">
          <img src={image} alt="img" />
          <button className="home-button">Download Now</button>
        </a>
        {form.date != todayDate ? (
          <Link to={`/updateform/${id}`}>
            <button className="secondary-button">
              Please Update Your Form
            </button>
          </Link>
        ) : (
          <button className="third-button">You Have Updated Your Form</button>
        )}
      </div>
    </div>
  );
}

export default HomePage;
