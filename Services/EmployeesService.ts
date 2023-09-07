import axios from "axios";
import appConfig from "../Utils/AppConfig";
import EmployeeModel from "../Models/EmployeeModel";
import { appStore } from "../Redux/AppState";
import { employeesActions } from "../Redux/EmployeesSlice";

class EmployeesService {
    public async getAllEmployees() : Promise<EmployeeModel[]> {
        let employees = appStore.getState().employees;
        if(employees.length === 0) {
            const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl) //bringing products from remote server
            employees = response.data;
            appStore.dispatch(employeesActions.setAll(employees)) 

        }
        return employees;


    }

    public async getOneEmployee(id: number): Promise<EmployeeModel> {
        let employees = appStore.getState().employees;
        let employee = employees.find(e=> e.id === id)
        if(!employee) {
            const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id) //bringing products from remote server
            employee = response.data;

        }
        return employee;

 
    }

}
const employeeService = new EmployeesService();
export default employeeService;