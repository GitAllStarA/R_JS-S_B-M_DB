import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
function CreateEmployeeComponent() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    emailId: "",
  }

  const [data, setData] = useState(initialValues);

  const changeFirstNameHandler = (event) => {
    setData({...data, [event.target.name]: event.target.value});
  };

  // const changeLastNameHandler = (e) => {
  //   setData({ lastName: e.target.value });
  // };
  // const changeEmailId = (e) => {
  //   setData({ emailId: e.target.value });
  // };

  const saveEmployee = (e) => {
    e.preventDefault();
  let employee = {
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
    };
   console.log("employee => " + JSON.stringify(employee));
  };


  const cancelEmployeSubmut = () => {
    navigate("/");
  };

  return (
    <div className="container" id="listEmployee">
      <button className="btn btn-primary" style={{marginBottom: "10px"}} onClick={goBack}>
        Back
      </button>

      {/* <h1 id="listEmployee">Fill in the form to add Employee</h1> */}
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="text-center">Add Employee Form</h3>
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
