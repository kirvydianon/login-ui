import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./component/LandingPage";
import LoginPage from "./component/LoginPage";
import FormPage from "./component/FormPage";
import Error from "./component/Error";
import UpdateForm from "./component/UpdateForm";
import HomePage from "./component/HomePage";
import Profile from "./component/Profile";
import Userdata from "./component/Userdata";
import Loading from "./FormPages/Loading";
import api from "./Api/Api";

import { useGlobalContext } from "./Auth/ContextProvider";
import PrivateRoute from "./FormPages/PrivateRoute";
function App() {
  const todayDate = new Date().toJSON().split("T")[0];

  const { auth, setAuth, form, updateForm, loading, setLoading } =
    useGlobalContext();

  useEffect(async () => {
    setLoading(true);
    try {
      api
        .get("registerform/auth/", {
          headers: {
            "Content-Type": "application/json",
            accessToken: localStorage.getItem("accessToken"),
          },
        })
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
      setLoading(false);
    } catch (error) {
      alert("No Data Available");
    }
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/homepage/" element={<HomePage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/userdata" element={<Userdata />} />
      </Route>

      <Route path="/updateform/:id" element={<UpdateForm />} />

      <Route path="/form/" element={<FormPage />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
