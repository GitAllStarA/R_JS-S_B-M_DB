import axios from 'axios';

const EMPLOYEE_API_BASE_URL= "https://thebackend.uc.r.appspot.com/api/v1/employees";

class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}
// imp we are exporting object of this class.
export default new EmployeeService();