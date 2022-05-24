import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../Auth/ContextProvider";
import Sidebar from "./Sidebar";
import Loading from "../FormPages/Loading";
import * as ReactBootStrap from "react-bootstrap";
import api from "../Api/Api";

function Userdata() {
  const { data, setData, auth, loading, setLoading } = useGlobalContext();

  let id = auth.id;
  useEffect(async () => {
    setLoading(true);

    try {
      api.get(`updateForm/users/${id}`).then((response) => {
        setData(response.data);
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
    <>
      <Sidebar />
      <div className="m-5 text-capitalize">
        <h5>Showing last 5 of your data</h5>
        <ReactBootStrap.Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Username</th>
              <th>Purpose</th>
              <th>Walk In</th>
              <th>Temperature</th>
              <th>Symptoms</th>
              <th>Expose</th>
              <th>Travel</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr key={data.id}>
                <td>{data.date}</td>
                <td>{auth.username}</td>
                <td>{data.purpose}</td>
                <td>{data.timesIn === 0 ? "0" : data.timesIn}</td>
                <td>
                  {data.temperature === "0.00"
                    ? "No temperature"
                    : data.temperature}
                </td>
                <td>{data.symptoms}</td>
                <td>{data.expose}</td>
                <td>{data.travel}</td>
              </tr>
            ))}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    </>
  );
}

export default Userdata;
