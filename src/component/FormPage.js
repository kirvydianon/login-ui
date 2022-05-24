import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";
import Form1 from "../FormPages/Form1";
import Form2 from "../FormPages/Form2";
import api from "../Api/Api";

function FormPage() {
  const navigate = useNavigate();

  const {
    auth,
    setAuth,
    form,
    setForm,
    pagination,
    setPagination,
    username,
    email,
    password,
    firstname,
    lastname,
    middlename,
    nationality,
    age,
    contact,
    gender,
    types,
    address,
    vaccinated,
    vaccine,
    people,
    course,
    year,
    grade,
    designation,
  } = useGlobalContext();

  const inputForm = async (e) => {
    e.preventDefault();

    api
      .post("registerform/", {
        username: username,
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        middlename: middlename,
        nationality: nationality,
        age: age,
        contact: contact,
        gender: gender,
        types: types,
        address: address,
        vaccinated: vaccinated,
        vaccine: vaccine,
        people: people,
        course: course,
        year: year,
        grade: grade,
        designation: designation,
      })
      .then(() => {
        navigate("/login");
      });
  };

  return (
    <div>
      {pagination ? (
        <Form1
          pagination={pagination}
          setPagination={setPagination}
          inputForm={inputForm}
        />
      ) : (
        <Form2
          pagination={pagination}
          setPagination={setPagination}
          inputForm={inputForm}
        />
      )}
    </div>
  );
}

export default FormPage;
