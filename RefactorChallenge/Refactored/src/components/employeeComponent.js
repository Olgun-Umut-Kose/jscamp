import { getUserInMemoryDalInstance } from "../constants/userDataAccessSingleton.js"
import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import Employee from "../models/employee.js"
import EmployeeServiceValidationDecorator from "../services/decorators/employeeServiceValidationDecorator.js"
import EmployeeService from "../services/employeeService.js"
import EmployeeValidator from "../services/Validators/employeeValidator.js"
import UserDeleteValidator from "../services/validators/userDeleteValidator.js"

console.log("Employee component yüklendi")
console.log("*************************************************************************************************************************************")
let dataAccess = getUserInMemoryDalInstance()
let employeeService = new EmployeeService({loggerService:new MongoLogger(),userDataAccess:dataAccess})
let userDeleteValidator = new UserDeleteValidator()
let employeeValidator = new EmployeeValidator()
let employeeServiceValidationDecorator = new EmployeeServiceValidationDecorator(employeeService,{entityValidator:employeeValidator,deleteValidator:userDeleteValidator})

let employee1 = new Employee({id:0,firstName:"Seda",lastName:"Yılmaz",city:"Ankara",age:"24",salary:1000});
let employee2 = new Employee({id:7,firstName:"hgfdhds",lastName:"hjkl",city:"Ankara",age:"21",salary:1000});
let employee3 = new Employee({id:0,city:"Ankara",age:"21",creditCardNumber:"2423534"});
let employee4 = new Employee({id:7,firstName:"hgfdhds",lastName:"hjkl",city:"Ankara",age:"21a",salary:1000});
let employee5 = new Customer({id:7,firstName:"hgfdhds",lastName:"hjkl",city:"Ankara",age:"21a"});


    console.log("---------------------------------------------------------------------------------------------------------------")
    console.log(employeeServiceValidationDecorator.add(employee5))
    console.log(employeeServiceValidationDecorator.getAllBy())

Test(employee1,employee2)
Test(employee3,employee4)


function Test(employee1,employee2) {
    console.log("---------------------------------------------------------------------------------------------------------------")
    console.log(employeeServiceValidationDecorator.add(employee1))
    console.log(employeeServiceValidationDecorator.getAllBy())
    console.log(employeeServiceValidationDecorator.update(employee2))
    console.log(employeeServiceValidationDecorator.getAllBy())
    console.log(employeeServiceValidationDecorator.deleteBy(employee2))
    console.log(employeeServiceValidationDecorator.getById(7))
    console.log(employeeServiceValidationDecorator.getSortedByField("firstName"))
}