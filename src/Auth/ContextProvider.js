import React, { useState, useContext, useEffect } from "react";
// import data from "../data";
// import sad from "../form";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const [auth, setAuth] = useState({
    id: 0,
    username: "",
    status: false,
    // inviActive: false,
    // updateActive: false,
  });

  const [isUpdated, setIsUpdated] = useState(true);
  const [pagination, setPagination] = useState(true);

  // FORM
  const [form, setForm] = useState([]);
  const [updateForm, setUpdateForm] = useState([]);
  //Form 1
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState(0);
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [types, setTypes] = useState("");
  const [address, setAddress] = useState("");
  const [vaccinated, setVaccinated] = useState("");
  const [vaccine, setVaccine] = useState("");
  //Form 2
  const [people, setPeople] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [grade, setGrade] = useState("");
  const [designation, setDesignation] = useState("");

  //Update 1 and 2

  const [purpose, setPurpose] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [disease, setDisease] = useState({
    fever: "",
    cough: "",
    headache: "",
    diarrhea: "",
    bodyPain: "",
    lostSmell: "",
    skin: "",
    shortness: "",
    colds: "",
    sore: "",
  });
  const [hotspots, setHotspots] = useState("");
  const [together, setTogether] = useState("");
  const [expose, setExpose] = useState("");
  const [travel, setTravel] = useState("");
  const [where, setWhere] = useState("");

  //UpdateForm Symptoms
  const [fever, setFever] = useState("");
  const [cough, setCough] = useState("");
  const [headache, setHeadache] = useState("");
  const [diarrhea, setDiarrhea] = useState("");
  const [bodyPain, setBodyPain] = useState("");
  const [lostSmell, setLostSmell] = useState("");
  const [skin, setSkin] = useState("");
  const [shortness, setShortness] = useState("");
  const [colds, setColds] = useState("");
  const [sore, setSore] = useState("");

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        auth,
        setAuth,
        isUpdated,
        setIsUpdated,
        form,
        setForm,
        updateForm,
        setUpdateForm,
        pagination,
        setPagination,
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
        form,
        setForm,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
