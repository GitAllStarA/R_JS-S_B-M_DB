import logo from "./logo.svg";
import "./App.css";

// Router enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ListEmployeeFunctionalComponent from "./components/ListEmployeeFunctionalComponent";
import { shareAPIS as shareAPISContext } from "./contexts/shareAPISContext";
import { useState } from "react";

function App() {
  const [data, setData] = useState("http://localhost:8080/api/v1/employees");
  return (
    <div id="appDiv">
      {/* <ListEmployeeFunctionalComponent/> */}
      <shareAPISContext.Provider value={{data,setData}}>
        <Router>
          <HeaderComponent />
          <div className="contianer">
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
                path="/addEmployee"
                exact
                element={<CreateEmployeeComponent />}
              />
              <Route
                path="/createEmployee"
                exact
                element={<CreateEmployeeComponent />}
              />
            </Routes>
          </div>
          <FooterComponent />
        </Router>
      </shareAPISContext.Provider>
    </div>
  );
}

export default App;
