import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Routers,Route, useNavigate } from "react-router-dom";
import { EmployeeServiceFunctional } from "../services/EmployeeServiceFunctional";
import { shareAPIS } from "../contexts/shareAPISContext";
import "./style.css"

 const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";


export const ListEmployeeFunctionalComponent = () => {


  const [state, setState] = useState([]);

  const navigate = useNavigate();

 
 // console.log(EMPLOYEE_API_BASE_URL)


  //context of api service
  const {data, setData} = useContext(shareAPIS);

  console.log("-> api from context "+data)

  const getData = async () => {
    await axios.get(data).then((promdata) => {
      setState(promdata.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const DisplayData = state.map((info, idx) => {
    return (
      <tr>
        <td key={idx}>{info.firstName}</td>
        <td key={idx}>{info.lastName}</td>
        <td key={idx}>{info.emailId}</td>
      </tr>
    );
  });



  return (
    <div className="container" id="listEmployee">
      <button className="btn btn-primary" onClick={()=>{navigate("/addEmployee")}}>
        Add Employee
      </button>
      <h1 id ="listEmployee" ></h1>
      <table  className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
};

export default ListEmployeeFunctionalComponent;
