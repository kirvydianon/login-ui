import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import UpdateForm1 from "../FormPages/UpdateForm1";
import UpdateForm2 from "../FormPages/UpdateForm2";
import api from "../Api/Api";

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
    loading,
    setLoading,
  } = useGlobalContext();

  const inputForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      api
        .post("updateform", {
          username: users.username,
          firstname: users.firstname,
          lastname: users.lastname,
          middlename: users.middlename,
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
          date: date,
          temperature: 0,
          timesIn: 0,
        })
        .then((response) => {
          navigate(`/homepage`);
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

      api.get(`updateform/updateId/${id}`).then((response) => {
        setUpdateForm(response.data);
      });
      setLoading(false);
    } catch (error) {
      alert("No Data Available");
    }
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
