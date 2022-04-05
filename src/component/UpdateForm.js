import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import UpdateForm1 from "../FormPages/UpdateForm1";
import UpdateForm2 from "../FormPages/UpdateForm2";

function UpdateForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  const date = new Date().toJSON().split("T")[0];
  const {
    updateForm,
    setUpdateForm,
    users,
    setUsers,
    setAuth,
    isUpdated,
    setIsUpdated,
    purpose,
    setPurpose,
    symptoms,
    setSymptoms,
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
    fever,
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
  } = useGlobalContext();

  const inputForm = (e) => {
    e.preventDefault();

    axios
      .post("https://triage-system-form.herokuapp.com/updateform", {
        purpose: purpose,
        symptoms: symptoms,
        fever: fever,
        cough: cough,
        headache: headache,
        diarrhea: diarrhea,
        bodyPain: bodyPain,
        lostSmell: lostSmell,
        skin: skin,
        shortness: shortness,
        colds: colds,
        sore: sore,
        hotspots: hotspots,
        together: together,
        expose: expose,
        travel: travel,
        where: where,
        RegisterFormId: id,
        updateActive: true,
        date: date,
        temperature: 0,
      })
      .then((response) => {
        navigate(`/homepage/${id}`);
        setPurpose("");
        setSymptoms("");
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
        setHotspots("");
        setTogether("");
        setExpose("");
        setTravel("");
        setWhere("");
        setIsUpdated(true);
      });

    axios
      .get(`https://triage-system-form.herokuapp.com/updateform/updateId/${id}`)
      .then((response) => {
        setUpdateForm(response.data);
      });
  };
  return (
    <div>
      {isUpdated ? (
        <UpdateForm1
          isUpdated={isUpdated}
          setIsUpdated={setIsUpdated}
          inputForm={inputForm}
        />
      ) : (
        <UpdateForm2
          isUpdated={isUpdated}
          setIsUpdated={setIsUpdated}
          inputForm={inputForm}
          id={id}
        />
      )}
    </div>
  );
}

export default UpdateForm;
