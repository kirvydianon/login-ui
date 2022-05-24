import axios from "axios";
import QRCode from "qrcode";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams, Outlet } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import { FaBars, FaTimes } from "react-icons/fa";
import * as ReactBootStrap from "react-bootstrap";
import Loading from "../FormPages/Loading";
import api from "../Api/Api";

import Sidebar from "./Sidebar";

function HomePage() {
  const {
    auth,
    setAuth,
    data,
    setData,
    form,
    setForm,
    openSidebar,
    closeSidebar,
    isSidebarOpen,
    setUsers,
    loading,
    setLoading,
  } = useGlobalContext();

  let id = auth.id;
  const navigate = useNavigate();
  const [image, setImage] = useState("");

  const todayDate = new Date().toJSON().split("T")[0];

  useEffect(async () => {
    setLoading(true);
    try {
      api.get(`updateForm/updateId/${id}`).then((response) => {
        if (response.data == null) {
          navigate(`/updateform/${id}`);
        } else {
          setForm(response.data);
        }
      });

      api.get(`registerform/byId/${id}`).then((response) => {
        setUsers(response.data);
      });

      QRCode.toDataURL(id).then((data) => {
        setImage(data);
      });
      setLoading(false);
    } catch (error) {
      alert("No Data Available");
    }
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="container-home">
      <Sidebar />
      <div className="wrapper-field">
        <a href={image} download className="a-field">
          <img src={image} alt="img" />
          <button className="home-button">Download Now</button>
        </a>
        <div className="margin-top">
          {form.date !== todayDate ? (
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
    </div>
  );
}

export default HomePage;
