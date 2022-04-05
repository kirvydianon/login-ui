import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";

function UpdateForm2({ id, isUpdated, setIsUpdated, inputForm }) {
  const [user, setUser] = useState("");

  const {
    purpose,
    setPurpose,
    symptoms,
    setSymptoms,
    disease,
    setDisease,
    hotspots,
    setHotspots,
    together,
    setTogether,
    expose,
    setExpose,
    travel,
    setTravel,
    where,
    setWhere,
  } = useGlobalContext();

  return (
    <div className="container-field">
      <form onSubmit={inputForm}>
        <header className="header">
          <h3 className="text-left">Hello! {user.firstname}</h3>
          <h4 className="text-center">
            University of Cebu Daily Health Symptoms Questionnaire
          </h4>
        </header>

        <div className="form-group">
          <h5>Please answer this truthfully:</h5>
          <div>
            <label>
              3. Is your Sitio or Barangay is one of HOTSPOTS for COVID 19?
              <input
                name="hotspots"
                type="radio"
                value="yes"
                className="input-radio"
                // checked={vaccinated === "yes"}
                onChange={(e) => setHotspots(e.target.value)}
              />
              Yes
              <input
                name="hotspots"
                type="radio"
                value="no"
                className="input-radio"
                onChange={(e) => setHotspots(e.target.value)}
                // checked={vaccinated === "no"}
                // onChange={(e) => setVaccinated(e.target.value)}
              />
              No
            </label>
          </div>
          <div>
            <label>
              4. Have you worked / lived together, stayed had been in the same
              place, house with confimed COVID 19 case?
              <input
                name="together"
                type="radio"
                value="yes"
                className="input-radio"
                onChange={(e) => setTogether(e.target.value)}
                // checked={vaccinated === "yes"}
                // onChange={(e) => setVaccinated(e.target.value)}
              />
              Yes
              <input
                name="together"
                type="radio"
                value="no"
                className="input-radio"
                onChange={(e) => setTogether(e.target.value)}

                // checked={vaccinated === "no"}
                // onChange={(e) => setVaccinated(e.target.value)}
              />
              No
            </label>
          </div>
          <div>
            <label>
              5. Have you had contact with anyone ( family, friends, co-workers
              neighbor ) with fever, cough, colds, sorethroat, diarrhea/lbm,
              loss of smell for the past 2 weeks?
              <input
                name="contact"
                type="radio"
                value="yes"
                className="input-radio"
                onChange={(e) => setExpose(e.target.value)}

                // checked={vaccinated === "yes"}
                // onChange={(e) => setVaccinated(e.target.value)}
              />
              Yes
              <input
                name="contact"
                type="radio"
                value="no"
                className="input-radio"
                onChange={(e) => setExpose(e.target.value)}

                // checked={vaccinated === "no"}
                // onChange={(e) => setVaccinated(e.target.value)}
              />
              No
            </label>
          </div>
          <div>
            <label>
              6. Have you travelled outside Cebu City for the past 2 weeks?
              <input
                name="travel"
                type="radio"
                value="yes"
                className="input-radio"
                onChange={(e) => setTravel(e.target.value)}

                // checked={vaccinated === "yes"}
                // onChange={(e) => setVaccinated(e.target.value)}
              />
              Yes
              <input
                name="travel"
                type="radio"
                value="no"
                checked={travel === "no"}
                className="input-radio"
                onChange={(e) => setTravel(e.target.value)}

                // checked={vaccinated === "no"}
                // onChange={(e) => setVaccinated(e.target.value)}
              />
              No
              <label>
                If yes, where?
                <input
                  type="text"
                  className="underline-text"
                  value={where}
                  disabled={travel === "no"}
                  onChange={(e) => setWhere(e.target.value)}
                  required
                />
              </label>
            </label>
          </div>
        </div>
        <div className="form-input">
          <h6>
            Please attach copy of certificate of Completion of Quarantine ( for
            returning students, OFW, Seafarers or patient with influenza like
            infection / person with history of travel outside Cebu )
          </h6>
          <label>
            Import File:
            <input type="file" className="input-control" />
          </label>
        </div>
        <div className="form-input">
          <h6>
            For Covid 19 Survivors, please attach Medical certificate of it to
            go back from attending infectious Disease Specialist
          </h6>
          <label>
            Import File:
            <input type="file" className="input-control" />
          </label>
        </div>
        <div className="form-group">
          <label className="text-small">
            <input
              type="checkbox"
              className="input-checkbox text-arrange"
              required
            />
            I hereby authorize University of Cebu, to collect and process the
            data indicated here in for the purpose of effecting control of the
            COVID 19 infection, I understand that my personal information of
            protected by RA 10173, Data Privacy Act of 2012, and that I am
            required by RA 11469, Bayanihan to Heal as One Act, to provide
            truthful information
          </label>
        </div>
        <div className="form-group">
          <button
            onClick={(e) => setIsUpdated(true)}
            type="button"
            className="pagination-button"
          >
            Prev
          </button>
          <div className="form-group">
            <button id="submit" type="submit" className="primary-button">
              Submit
            </button>
            <Link to={`/homepage/${id}`}>
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

export default UpdateForm2;
