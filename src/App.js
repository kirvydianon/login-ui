import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./component/LandingPage";
import LoginPage from "./component/LoginPage";
import RegisterPage from "./component/RegisterPage";
import FormPage from "./component/FormPage";
import Error from "./component/Error";
import UpdateForm from "./component/UpdateForm";
import HomePage from "./component/HomePage";

import { useGlobalContext } from "./Auth/ContextProvider";
import axios from "axios";
function App() {
  const todayDate = new Date().toJSON().split("T")[0];

  const { auth, setAuth, form, updateForm } = useGlobalContext();

  useEffect(() => {
    axios
      .get(
        "https://project-login-triageform.herokuapp.com/registerform/auth/",
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      )
      .then((response) => {
        if (response.data.error) {
          setAuth({ ...auth, status: false });
        } else {
          setAuth({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {auth.status && (
          <>
            <Route path="/homepage/:id" element={<HomePage />} />
          </>
        )}
        {form.date == todayDate ? (
          <Route path="/homepage/:id" element={<HomePage />} />
        ) : (
          <Route path="/updateform/:id" element={<UpdateForm />} />
        )}
        <Route path="/form/" element={<FormPage />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
