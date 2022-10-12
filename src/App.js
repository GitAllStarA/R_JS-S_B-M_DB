import logo from "./logo.svg";
import "./App.css";

// Router enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
import { Route, BrowserRouter as Router, Routes, useLocation, useNavigate  , useParams } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ListEmployeeFunctionalComponent from "./components/ListEmployeeFunctionalComponent";

function App() {
  return (
    <div id="appDiv" className="container">
      <ListEmployeeFunctionalComponent/>
      {/* <Router>
          <HeaderComponent />
          <div className="contianer">
          <Routes>
            <Route path="/" exact element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent/>}/>
            <Route path="/addEmployee" exact element={<CreateEmployeeComponent/>}/>
          </Routes>
          </div>
          <FooterComponent />
      </Router> */}
    </div>
  );
}

export default App;
