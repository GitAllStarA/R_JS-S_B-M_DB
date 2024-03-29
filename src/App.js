import "./App.css";
// Router enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ListEmployeeFunctionalComponent from "./components/ListEmployeeFunctionalComponent";
import { shareAPIS as shareAPISContext } from "./contexts/shareAPISContext";
import { useState } from "react";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  const [data, setData] = useState("https://thebackend.uc.r.appspot.com/api/v1/employees");
  return (
    <div id="appDiv">
      <shareAPISContext.Provider value={{ data, setData }}>
        <HeaderComponent />
        <div className="contianer">
          <div>
            <h1></h1>
          </div>
          <Routes>
            <Route
              path="/"
              exact
              element={<ListEmployeeFunctionalComponent />}
            />
            <Route
              path="/employees"
              element={<ListEmployeeFunctionalComponent />}
            />
            <Route
              path="/addEmployee/:id"
              exact
              element={<CreateEmployeeComponent />}
            />
            <Route
              path="/createEmployee"
              exact
              element={<CreateEmployeeComponent />}
            />
            {/* <Route
              path="/updateEmployee/:id"
              exact
              element={<UpdateEmployeeComponent />}  />*/}
           <Route path="/viewEmployee/:id" exact element={<ViewEmployeeComponent/>}/>
          </Routes>
        </div>
        <FooterComponent />
      </shareAPISContext.Provider>
    </div>
  );
}

export default App;
