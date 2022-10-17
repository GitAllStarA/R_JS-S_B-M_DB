import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    // declared a state with employees array
    this.state = {
      employees: [],
    };

    //bind the event to the construcotr
    this.addEmployee = this.addEmployee.bind(this);
  }

  // called immediately after compnent gets components mounted, this is the best place to call out REST services object
  componentDidMount() {
    //best place to call rest api or ajax calls.
    // we are making this method to return promise.
    EmployeeService.getEmployees().then((response) => {
      //in order to to set data to the state of out componet line 8
      // we need to use the setState() method

      this.setState({
        //storing the response from the  EmployeeService.getEmployees().then( (response) to the employees [] line 8
        employees: response.data,
      });
    });
  }


  // as we confired our Component CreateEmployeeComponent in App.js, 
  // the react Router maintian a history object of all the routes, they can paseed to other component using the props.
  addEmployee() {
    // here the CreateEmployeeComponent is called
    this.props.history.push('/addEmployee');
  }

  render() {
    return (
      <div>
        <h2 className="text-center"> Employees List </h2>
        <div className="">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee emailId</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td key={employee.id}>{employee.firstName}</td>
                  <td key={employee.id}>{employee.lastName}</td>
                  <td key={employee.id}>{employee.emailId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ListEmployeeComponent.propTypes = {};

export default ListEmployeeComponent;
