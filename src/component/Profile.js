import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import NumberFormat from "react-number-format";
import api from "../Api/Api";

import { Link, useNavigate, useParams, Outlet } from "react-router-dom";
import Userdata from "./Userdata";
import { useGlobalContext } from "../Auth/ContextProvider";

function Profile() {
  const {
    auth,
    setAuth,
    users,
    setUsers,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    middlename,
    setMiddlename,
    age,
    setAge,
    contact,
    setContact,
    email,
    setEmail,
  } = useGlobalContext();

  const inputForm = async (e) => {
    e.preventDefault();

    api
      .put("registerform/account", {
        id: auth.id,
        firstname: firstname,
        lastname: lastname,
        middlename: middlename,
        age: age,
        contact: contact,
        email: email,
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("Successfully Updated");
        }
      });
  };
  return (
    <>
      <Sidebar />
      <div className="register-container ">
        <form className="form-profile" onSubmit={inputForm} responsive="sm">
          {/* Grid 1 */}
          <div className="grid-profile">
            <div>
              <h1 className="text-center text-capitalize">{users.username}</h1>
            </div>
            <div className="form-settings text-center">
              <div className="primary-button1">Account</div>
            </div>
          </div>

          {/* Grid 2 */}
          <div className="m-3">
            <h3 className="text-left m-3">Account Settings</h3>
            <div className="flex-group">
              <div className="form-account">
                <h6>First Name</h6>
                <input
                  type="text"
                  placeholder={users.firstname}
                  className="form-control2 text-capitalize"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="form-account">
                <h6>Last Name</h6>
                <input
                  type="text"
                  placeholder={users.lastname}
                  className="form-control2 text-capitalize"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
              <div className="form-account">
                <h6>Middle Initial</h6>
                <input
                  type="text"
                  placeholder={users.middlename}
                  className="form-control2 text-capitalize"
                  value={middlename}
                  onChange={(e) => setMiddlename(e.target.value)}
                  required
                />
              </div>
              <div className="form-account">
                <h6>Age</h6>
                <input
                  type="number"
                  placeholder={users.age}
                  className="form-control2"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div className="form-account">
                <h6>Contact Number</h6>
                <NumberFormat
                  placeholder={users.contact}
                  className="form-control2"
                  format="09 ### ### ###"
                  mask="_"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>
              <div className="form-account">
                <h6>Email</h6>
                <input
                  type="email"
                  placeholder={users.email}
                  className="form-control2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group grid-pagination">
              <div>
                <button
                  id="submit"
                  type="submit"
                  className="primary-button right-label"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
