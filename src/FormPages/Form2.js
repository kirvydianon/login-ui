import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";

function Form2({ id, pagination, setPagination, inputForm }) {
  const navigate = useNavigate();

  const {
    form,
    people,
    setPeople,
    course,
    setCourse,
    year,
    setYear,
    grade,
    setGrade,
    designation,
    setDesignation,
  } = useGlobalContext();

  return (
    <div className="container-form2">
      <form onSubmit={inputForm}>
        <header className="header">
          <h1 className="text-left">Triage Registration</h1>
          <h4 className="text-left">Information</h4>
          <h6>
            For UC Employees/Students/Trainees/Agency Workers (please mark chack
            (/) and specify the department where you belong in in the blank
          </h6>
        </header>

        <div className="form-group">
          <input
            name="people"
            type="radio"
            value="teaching"
            checked={people === "teaching"}
            onChange={(e) => setPeople(e.target.value)}
            className="input-row"
            required
          />
          Teaching Staff Department
          <input
            name="people"
            type="radio"
            value="nonTeaching"
            checked={people === "nonTeaching"}
            onChange={(e) => setPeople(e.target.value)}
            className="input-row"
            required
          />
          Non-Teaching Staff Department
          <input
            name="people"
            type="radio"
            value="trainee"
            checked={people === "trainee"}
            onChange={(e) => setPeople(e.target.value)}
            className="input-row"
            required
          />
          Trainee Training Course
          <div>
            <input
              name="people"
              type="radio"
              value="college"
              checked={people === "college"}
              onChange={(e) => setPeople(e.target.value)}
              className="input-row"
              required
            />
            <h5> College Student</h5>
            <label className="label-form">
              <h6>Course:</h6>
              <select
                className="form-control1"
                disabled={
                  (people === "elem") |
                  (people === "worker") |
                  (people === "teaching") |
                  (people === "nonTeaching") |
                  (people === "trainee")
                }
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option disabled value="">
                  Select type...
                </option>
                <option value="BS(AB)-ENGLISH">BS(AB)-ENGLISH</option>
                <option value="BS(AB)-LITERATURE">BS(AB)-LITERATURE</option>
                <option value="BSPOLSCI">BSPOLSCI</option>
                <option value="BSPSYCH">BSPSYCH</option>
                <option value="BEED">BEED</option>
                <option value="BPED">BPED</option>
                <option value="BSA">BSA</option>
                <option value="BSBA-FM">BSBA-FM</option>
                <option value="BSBA-HRDM">BSBA-HRDM</option>
                <option value="BSBA-MA">BSBA-MA</option>
                <option value="BSBA-MM">BSBA-MM</option>
                <option value="BSBA-OM">BSBA-OM</option>
                <option value="BSBA-OA">BSBA-OA</option>
                <option value="BSBA-REM">BSBA-REM</option>
                <option value="BSCA">BSCA</option>
                <option value="BSCE">BSCE</option>
                <option value="BSCPE">BSCPE</option>
                <option value="BSCRIM">BSCRIM</option>
                <option value="BSCS">BSCS</option>
                <option value="BSECE">BSECE</option>
                <option value="BSED">BSED</option>
                <option value="BSED-ENGLISH">BSED-ENGLISH</option>
                <option value="BSED-FILIPINO">BSED-FILIPINO</option>
                <option value="BSED-MATHEMATICS">BSED-MATHEMATICS</option>
                <option value="BSED-SCIENCE">BSED-SCIENCE</option>
                <option value="BSED-SOCSCI">BSED-SOCSCI</option>
                <option value="BSED-BIOSCI">BSED-BIOSCI</option>
                <option value="BSED-PHYSCI">BSED-PHYSCI</option>
                <option value="BSEE">BSEE</option>
                <option value="BSIE">BSIE</option>
                <option value="BSIT">BSIT</option>
                <option value="BSME">BSME</option>
                <option value="BSSW">BSSW</option>
              </select>
            </label>
            <label className="label-form">
              <h6>Year:</h6>
              <select
                className="form-control1"
                value={year}
                disabled={
                  (people === "elem") |
                  (people === "worker") |
                  (people === "teaching") |
                  (people === "nonTeaching") |
                  (people === "trainee")
                }
                required
                onChange={(e) => setYear(e.target.value)}
              >
                <option disabled value="">
                  Select type...
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
          </div>
          <div>
            <input
              name="people"
              type="radio"
              value="elem"
              checked={people === "elem"}
              onChange={(e) => setPeople(e.target.value)}
              className="input-row"
              required
            />
            <h5>Basic Ed Student</h5>
            <label className="label-form">
              <h6>Grade:</h6>
              <select
                className="form-control1"
                value={grade}
                disabled={
                  (people === "college") |
                  (people === "worker") |
                  (people === "teaching") |
                  (people === "nonTeaching") |
                  (people === "trainee")
                }
                required
                onChange={(e) => setGrade(e.target.value)}
              >
                <option disabled value="">
                  Select type...
                </option>
                <option value="K-1">K-1</option>
                <option value="K-2">K-2</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="1">11</option>
                <option value="12">12</option>
              </select>
            </label>
          </div>
          <div>
            <input
              name="people"
              type="radio"
              value="worker"
              checked={people === "worker"}
              onChange={(e) => setPeople(e.target.value)}
              className="input-row"
              required
            />
            <h5>Agency Worker</h5>
            <label className="label-form">
              <h6>Designation:</h6>
              <select
                className="form-control1"
                value={designation}
                disabled={
                  (people === "college") |
                  (people === "elem") |
                  (people === "teaching") |
                  (people === "nonTeaching") |
                  (people === "trainee")
                }
                required
                onChange={(e) => setDesignation(e.target.value)}
              >
                <option disabled value="">
                  Select type...
                </option>
                <option value="Plumber">Plumber</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Welder">Welder</option>
                <option value="Head Guard">Head Guard</option>
                <option value="Mason">Mason</option>
                <option value="Laundry Person">Laundry Person</option>
                <option value="Network Technician">Network Technician</option>
                <option value="Security Officer">Security Officer</option>
                <option value="Aircon Technician">Aircon Technician</option>
                <option value="Gardener">Gardener</option>
                <option value="Security Guard">Security Guard</option>
                <option value="Janitor">Janitor</option>
                <option value="Painter">Painter</option>
                <option value="Electrician">Electrician</option>
              </select>
            </label>
          </div>
        </div>

        <div className="form-group grid-pagination">
          <button
            onClick={(e) => setPagination(true)}
            type="submit"
            className="pagination-button"
          >
            Prev
          </button>

          <div className="form-group">
            <button id="submit" type="submit" className="primary-button">
              Submit
            </button>
            <Link to="/">
              <button id="submit" type="submit" className="primary-button">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form2;
