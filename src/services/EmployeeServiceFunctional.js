import React from 'react'
import ListEmployeeFunctionalComponent from '../components/ListEmployeeFunctionalComponent';

export const EmployeeServiceFunctional=()=> {
    const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

    console.log(EMPLOYEE_API_BASE_URL)


    const getAPIs = ()=>{
      console.log(EMPLOYEE_API_BASE_URL);
      return EMPLOYEE_API_BASE_URL;
    }
    
  return (
  
      <ListEmployeeFunctionalComponent EMPLOYEE_API_BASE_URL={EMPLOYEE_API_BASE_URL}/> 
 
  )
}

