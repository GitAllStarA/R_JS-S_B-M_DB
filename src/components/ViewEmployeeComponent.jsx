import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ViewEmployeeComponent() {
  const navigate = useNavigate();

  const idx = useParams();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    id: null,
    firstName: "",
    lastName: "",
    emailId: "",
  };
  const [data, setData] = useState(initialValues);
  const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

  const getEmployeeById = async (id) => {
    setLoading(true);
    await axios.get(EMPLOYEE_API_BASE_URL + "/" + id).then((resp) => {
      let employee = resp.data;
      console.log("promise useEffect : " + employee);
      setData({
        ...data,
        id: idx.id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
      });
      console.log("updated state data : " + data);
      if (resp.status == 200) {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getEmployeeById(idx.id);
  }, []);

  return (
    <div>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center"> View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label className="text-center">First Name: {data.firstName} </label>
            <label className="text-center">Last Name: {data.lastName} </label>
            <label className="text-center">Email ID: {data.emailId} </label>
            <label className="text-center">ID: {data.id} </label>
          </div>
          <div style={{ marginBottom: "10px" }} className="contianer">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btn btn-info"
          >
            back
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployeeComponent;
