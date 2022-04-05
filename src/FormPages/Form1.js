import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";

function Form1({ id, pagination, setPagination, inputForm }) {
  const navigate = useNavigate();

  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    middlename,
    setMiddlename,
    nationality,
    setNationality,
    age,
    setAge,
    contact,
    setContact,
    gender,
    setGender,
    types,
    setTypes,
    address,
    setAddress,
    vaccinated,
    setVaccinated,
    vaccine,
    setVaccine,
    setAuth,
  } = useGlobalContext();

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuth({ status: false, id: 0, firstname: "", successfull: true });
  };

  return (
    <div className="register-container">
      <form className="form-reg" onSubmit={inputForm}>
        <header className="header grid-item-1">
          <h1 className="text-left">REGISTRATION FORM</h1>
          <h4>Please Fill up all your information</h4>
        </header>

        {/* Grid 1 */}
        <div className="grid-container">
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Firstname"
              className="form-control"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Middle Initial"
              value={middlename}
              onChange={(e) => setMiddlename(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="form-control"
              required
            />
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-container">
          <div className="form-group">
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>
              <h4>Gender:</h4>
            </label>
            <input
              name="gender"
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
              className="input-radio"
            />
            Female
            <input
              name="gender"
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
              className="input-radio"
            />
            Male
          </div>
          <div className="form-group">
            <label>
              <h4>Types</h4>
            </label>
            <select
              className="form-control"
              value={types}
              onChange={(e) => setTypes(e.target.value)}
            >
              <option disabled value="">
                Select...
              </option>
              <option value="student">Student</option>
              <option value="visitor">Visitor</option>
              <option value="employees">Employees</option>
            </select>
          </div>
        </div>

        {/* Grid 3*/}
        <div className="grid-container">
          <div className="form-group">
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="container-vaccine">
            <div className="form-group">
              <label>
                <h6>Are you vaccinated?</h6>
              </label>
              <div>
                <input
                  name="vaccinated"
                  type="radio"
                  value="yes"
                  className="input-radio"
                  checked={vaccinated === "yes"}
                  onChange={(e) => setVaccinated(e.target.value)}
                />
                Yes
                <input
                  name="vaccinated"
                  type="radio"
                  value="no"
                  className="input-radio"
                  checked={vaccinated === "no"}
                  onChange={(e) => setVaccinated(e.target.value)}
                />
                No
              </div>
              <label>
                <h6>If yes? Select type of Vaccine</h6>
              </label>
              <select
                className="form-control"
                disabled={vaccinated === "no"}
                value={vaccine}
                onChange={(e) => setVaccine(e.target.value)}
              >
                <option disabled value="">
                  Select...
                </option>
                <option value="pfizer">Pfizer</option>
                <option value="moderna">Moderna</option>
                <option value="astrazeneca">AstraZeneca</option>
                <option value="sinovac">Sinovac</option>
                <option value="johnsonandjohnsons">Johnson and Johnsons</option>
                <option value="sputnik">Sputnik</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-group grid-pagination">
          {types === "visitor" ? (
            <div>
              <button id="submit" type="submit" className="primary-button">
                Submit
              </button>

              <Link to="/">
                <button
                  id="submit"
                  type="submit"
                  className="primary-button"
                  onClick={logout}
                >
                  Cancel
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <button
                onClick={(e) => setPagination(false)}
                type="button"
                className="pagination-button"
              >
                Next
              </button>
              <button
                onClick={(e) => setPagination(true)}
                type="button"
                className="pagination-button"
              >
                Prev
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form1;
