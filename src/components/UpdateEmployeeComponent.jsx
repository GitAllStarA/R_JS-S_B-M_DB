import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

function UpdateEmployeeComponent() {
  const EMPLOYEE_API_BASE_URL = "https://thebackend.uc.r.appspot.com/api/v1/employees";
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  // user id from feteched from url
  const idx = useParams();

  const initialValues = {
    id: null,
    firstName: "",
    lastName: "",
    emailId: "",
  };

  // api data manipulator
  const [data, setData] = useState(initialValues);

  //page loading state
  const [loading, setLoading] = useState(false);

  const changeFirstNameHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

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
    navigate("/")
    
  };

  const updateEmployeeStoreInDB = (empObjId, empObj) => {
    const empAPI = EMPLOYEE_API_BASE_URL + "/" + empObjId;
    console.log(empAPI)

    axios.put(empAPI,empObj).then((resp)=>{
      if(resp.status !=200){
        console.log(resp);
        navigate("/updateEmployee");
      }
    })
    
  };

  const cancelEmployeSubmit = () => {
    navigate("/");
  };

  useEffect(() => {
    getEmployeeById(idx.id);
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
          <h3 className="text-center">Update Employee Form</h3>
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
                  onClick={updateEmployee}
                >
                  update
                </button>
                <button
                  style={{ marginLeft: "10px", marginTop: "10px" }}
                  className="btn btn-danger"
                  onClick={cancelEmployeSubmit}
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

// function UpdateEmployeeComponent() {
//   const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

//   const userId = useParams();
//   console.log(userId);
//   const getEmployeeApi = EMPLOYEE_API_BASE_URL + "/" + userId.id;
//   console.log(getEmployeeApi);

//   const click = () => {
//     axios.get(getEmployeeApi).then((response) => {
//       const employee = response.data;
//       console.log(employee);
//     });
//   };

//   const click2 = () => {
//     axios.get(EMPLOYEE_API_BASE_URL).then((response) => {
//       const employee = response.data;
//       console.log(employee);
//     });
//   };

//   useEffect(() => {
//     click();
//   }, []);

//   return (
//     <div>
//       <h1> hello </h1>
//       <button
//         onClick={() => {
//           click();
//         }}
//       >
//         update click
//       </button>
//       <br></br>
//       <h1></h1>
//       <button
//         onClick={() => {
//           click2();
//         }}
//       >
//         click
//       </button>
//     </div>
//   );
// }
export default UpdateEmployeeComponent;
