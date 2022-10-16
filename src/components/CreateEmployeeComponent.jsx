import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
function CreateEmployeeComponent() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const initialValues = {
    id: null,
    firstName: "",
    lastName: "",
    emailId: "",
  };

  const [data, setData] = useState(initialValues);

  //page loading state
  const [loading, setLoading] = useState(false);

  // user id from feteched from url
  const idx = useParams();

  const changeFirstNameHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
    };
    console.log("employee => " + JSON.stringify(employee));
    if (idx.id === "_add") {
      console.log("create employee");

      createEmployee(employee);
    } else {
      console.log("update employee");

      updateEmployee(e);
    }
  };

  const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

  //saving employee using post call
  const createEmployee = (employee) => {
    axios.post(EMPLOYEE_API_BASE_URL, employee).then((response) => {
      if (response.status == 200) {
        console.log(response.status);
        navigate("/");
      } else {
        navigate("/addEmployee");
        console.log(response.status);
      }
    });
  };

  const cancelEmployeSubmut = () => {
    navigate("/");
  };

  //getting employee
  useEffect(() => {
    if (idx.id == "_add") {
      return;
    } else {
      getEmployeeById(idx.id);
    }
  }, []);

  // get employee by id
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
      setLoading(false);
    });
  };

  //update employee
  const updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
    };
    console.log("employee => " + JSON.stringify(employee));
    const employee_id = employee.id;
    updateEmployeeStoreInDB(employee_id, employee);
    navigate("/");
  };

  const updateEmployeeStoreInDB = (empObjId, empObj) => {
    const empAPI = EMPLOYEE_API_BASE_URL + "/" + empObjId;
    console.log(empAPI);

    axios.put(empAPI, empObj).then((resp) => {
      if (resp.status != 200) {
        console.log(resp);
        navigate("/updateEmployee");
      }
    });
  };

  const conditionalFormTitle = () => {
    if (idx.id == "_add") {
      return <h3 className="text-center"> Add Employee</h3>;
    } else  {
      return <h3 className="text-center"> Update Employee </h3>;
    }
  };

  return (
    <div className="container" id="listEmployee">
      <button
        className="btn btn-primary"
        style={{ marginBottom: "10px" }}
        onClick={goBack}
      >
        Back
      </button>

      {/* <h1 id="listEmployee">Fill in the form to add Employee</h1> */}
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {conditionalFormTitle()}
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>First Name</label>
                <br></br>
                <input
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={data.firstName}
                  onChange={changeFirstNameHandler}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <br></br>
                <input
                  className="form-control"
                  placeholder="LastName"
                  name="lastName"
                  value={data.lastName}
                  onChange={changeFirstNameHandler}
                />
              </div>

              <div className="form-group">
                <label>Email ID</label>
                <br></br>
                <input
                  className="form-control"
                  placeholder="EmailId"
                  name="emailId"
                  value={data.emailId}
                  onChange={changeFirstNameHandler}
                />
              </div>

              <div>
                <button
                  style={{ marginTop: "10px" }}
                  className="btn btn-success"
                  onClick={saveEmployee}
                >
                  submit
                </button>
                <button
                  style={{ marginLeft: "10px", marginTop: "10px" }}
                  className="btn btn-danger"
                  onClick={cancelEmployeSubmut}
                >
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeeComponent;
