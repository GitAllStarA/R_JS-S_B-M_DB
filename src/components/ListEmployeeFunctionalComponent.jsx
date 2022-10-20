import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { shareAPIS } from "../contexts/shareAPISContext";
import "./style.css";

const EMPLOYEE_API_BASE_URL = "https://thebackend.uc.r.appspot.com/api/v1/employees";

export const ListEmployeeFunctionalComponent = () => {

  //data from api
  const [state, setState] = useState([]);

  const navigate = useNavigate();

  //context of api service
  const { data, setData } = useContext(shareAPIS);

  const getData = async () => {
    await axios.get(data).then((promdata) => {
      setState(promdata.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // navigate to update employee page onClick editEmployee
  const editEmployee = (id) => {
    navigate(`/addEmployee/${id}`);
  };

  const deleteEmployee = (id) => {
    axios.delete(EMPLOYEE_API_BASE_URL + "/" + id).then((response) => {
      console.log(response.status);

      if (response.status == 200) {
        setData(state.filter((emp) => emp.id !== id));
        console.log(id);
        window.location.reload();
      }
    });
  };
  
  // view employee
  const viewEmployee = (id) => {
    navigate(`/viewEmployee/${id}`)
  };

  const DisplayData = state.map((info, idx) => {
    return (
      <tr>
        {/* <td key={idx} className="text-center">
          {info.id}
        </td> */}
        <td key={idx} className="text-center">
          {info.firstName}
        </td>
        <td key={idx} className="text-center">
          {info.lastName}
        </td>
        <td key={idx} className="text-center">
          {info.emailId}
        </td>
        <td>
          <button
            onClick={() => {
              editEmployee(info.id);
            }}
            className="btn btn-info"
          >
            Update
          </button>

          <button
            onClick={() => {
              deleteEmployee(info.id);
            }}
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>

          <button
            onClick={() => {
              viewEmployee(info.id);
            }}
            className="btn btn-info"
            style={{ marginLeft: "10px" }}
          >
            View 
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container" id="listEmployee">
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/addEmployee/_add");
        }}
      >
        Add Employee
      </button>
      <h1 id="listEmployee"></h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {/* <th className="text-center">ID</th> */}
            <th className="text-center">First Name</th>
            <th className="text-center">Last Name</th>
            <th className="text-center">Email Id</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
};

export default ListEmployeeFunctionalComponent;
