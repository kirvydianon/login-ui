import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";

function UpdateForm1({ id, isUpdated, setIsUpdated, inputForm }) {
  const {
    purpose,
    setPurpose,
    symptoms,
    setSymptoms,
    setFever,
    cough,
    setCough,
    headache,
    setHeadache,
    diarrhea,
    setDiarrhea,
    bodyPain,
    setBodyPain,
    lostSmell,
    setLostSmell,
    skin,
    setSkin,
    shortness,
    setShortness,
    colds,
    setColds,
    sore,
    setSore,
    auth,
  } = useGlobalContext();

  const yesButton = () => {
    if (symptoms === "no") {
      setFever("");
      setCough("");
      setHeadache("");
      setDiarrhea("");
      setBodyPain("");
      setLostSmell("");
      setSkin("");
      setShortness("");
      setColds("");
      setSore("");
    }
  };

  useEffect(() => {
    yesButton();
  }, [symptoms]);

  return (
    <div className="container-field">
      <form onSubmit={inputForm}>
        <header className="header">
          <h4 className="text-center">
            University of Cebu Daily Health Symptoms Questionnaire
          </h4>
        </header>

        <div className="form-group">
          <h5>Please answer this truthfully:</h5>
          <label>
            Date:
            <input type="date" />
          </label>
        </div>
        <div className="form-group">
          <label>
            1. Purpose of visit:
            <input
              type="text"
              className="underline-text"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <div>
            <label>
              2.Have you experience any of the following for the past 2 weeks?
              <input
                name="symptoms"
                type="radio"
                value="yes"
                className="input-radio"
                checked={symptoms === "yes"}
                onChange={(e) => setSymptoms(e.target.value)}
              />
              Yes
              <input
                name="symptoms"
                type="radio"
                value="no"
                className="input-radio"
                checked={symptoms === "no"}
                onChange={(e) => setSymptoms(e.target.value)}
              />
              No
            </label>
          </div>
          <label>
            <h6>If yes, please check any of the following symptoms:</h6>
          </label>
          <div className="checkbox-wrapper">
            <div>
              <input
                name="symptoms"
                type="checkbox"
                value="Fever"
                disabled={symptoms === "no"}
                onChange={(e) => setFever(e.target.value)}
                className="input-grid"
              />
              Fever
            </div>
            <div>
              <input
                name="symptoms"
                type="checkbox"
                value="Cough"
                disabled={symptoms === "no"}
                onChange={(e) => setCough(e.target.value)}
                className="input-grid"
              />
              Cough
            </div>
            <div>
              <input
                name="symptoms"
                type="checkbox"
                value="Headache"
                disabled={symptoms === "no"}
                onChange={(e) => setHeadache(e.target.value)}
                className="input-grid"
              />
              Headache
            </div>
            <div>
              <input
                name="symptoms"
                type="checkbox"
                value="Sorethroat"
                disabled={symptoms === "no"}
                onChange={(e) => setSore(e.target.value)}
                className="input-grid"
              />
              Sorethroat
            </div>
            <div>
              <input
                name="symptoms"
                type="checkbox"
                value="Diarrhea or LBM"
                disabled={symptoms === "no"}
                onChange={(e) => setDiarrhea(e.target.value)}
                className="input-grid"
              />
              Diarrhea or LBM
            </div>
            <div>
              <input
                name="symptoms"
                type="checkbox"
                value="Body Pains"
                disabled={symptoms === "no"}
                onChange={(e) => setBodyPain(e.target.value)}
                className="input-grid"
              />
              Body Pains
            </div>
            <div>
              <input
                name="symptoms"
                type="checkbox"
                value="Lost of smell/taste"
                disabled={symptoms === "no"}
                onChange={(e) => setLostSmell(e.target.value)}
                className="input-grid"
              />
              Lost of smell/taste
            </div>
            <div>
              <input
                name="symptoms"
                type="checkbox"
                value="Skin Rashes"
                disabled={symptoms === "no"}
                onChange={(e) => setSkin(e.target.value)}
                className="input-grid"
              />
              Skin Rashes
            </div>
            <div>
              <input
                name="symptoms"
                type="checkbox"
                value="Shortness of breath"
                disabled={symptoms === "no"}
                onChange={(e) => setShortness(e.target.value)}
                className="input-grid"
              />
              Shortness of breath
            </div>
            <div>
              <input
                name="symptoms"
                type="checkbox"
                value="Colds/Runny Nose"
                disabled={symptoms === "no"}
                onChange={(e) => setColds(e.target.value)}
                className="input-grid"
              />
              Colds/Runny Nose
            </div>
          </div>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="pagination-button"
            onClick={(e) => setIsUpdated(false)}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm1;
