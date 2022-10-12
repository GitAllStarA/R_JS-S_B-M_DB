import ListEmployeeFunctionalComponent from '../components/ListEmployeeFunctionalComponent';
import React from 'react'




const EmployeeServiceFunctional=()=> {
    const employeeBaseApiUrl = "http://localhost:8080/api/v1/employees";

    console.log(employeeBaseApiUrl)
    
  return (
    <div>
        <ListEmployeeFunctionalComponent employeeBaseApiUrl={employeeBaseApiUrl}/>
    </div>
  )
}

export default EmployeeServiceFunctional