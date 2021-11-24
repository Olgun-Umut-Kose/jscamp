import { getUserInMemoryDalInstance } from "../constants/userDataAccessSingleton.js"
import { ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import Employee from "../models/employee.js"
import CustomerService from "../services/customerService.js"
import CustomerServiceValidationDecorator from "../services/decorators/customerServiceValidationDecorator.js"
import CustomerValidator from "../services/Validators/customerValidator.js"
import UserDeleteValidator from "../services/validators/userDeleteValidator.js"

console.log("Customer component yüklendi")
console.log("*************************************************************************************************************************************")
let dataAccess = getUserInMemoryDalInstance()
let customerService = new CustomerService({loggerService:new ElasticLogger(),userDataAccess:dataAccess})
let userDeleteValidator = new UserDeleteValidator()
let customerValidator = new CustomerValidator()
let customerServiceValidationDecorator = new CustomerServiceValidationDecorator(customerService,{entityValidator:customerValidator,deleteValidator:userDeleteValidator})

let customer1 = new Customer({id:0,firstName:"Seda",lastName:"Yılmaz",city:"Ankara",age:"24",creditCardNumber:"2423534"});
let customer2 = new Customer({id:7,firstName:"hgfdhds",lastName:"hjkl",city:"Ankara",age:"21",creditCardNumber:"2423534"});
let customer3 = new Customer({id:0,city:"Ankara",age:"21",creditCardNumber:"2423534"});
let customer4 = new Customer({id:7,firstName:"hgfdhds",lastName:"hjkl",city:"Ankara",age:"21a",creditCardNumber:"2423534"});
let customer5 = new Employee({id:7,firstName:"hgfdhds",lastName:"hjkl",city:"Ankara",age:"21a",creditCardNumber:"2423534"});


    console.log("---------------------------------------------------------------------------------------------------------------")
    console.log(customerServiceValidationDecorator.add(customer5))
    console.log(customerServiceValidationDecorator.getAllBy())

Test(customer1,customer2)
Test(customer3,customer4)


function Test(customer1,customer2) {
    console.log("---------------------------------------------------------------------------------------------------------------")
    console.log(customerServiceValidationDecorator.add(customer1))
    console.log(customerServiceValidationDecorator.getAllBy())
    console.log(customerServiceValidationDecorator.update(customer2))
    console.log(customerServiceValidationDecorator.getAllBy())
    console.log(customerServiceValidationDecorator.deleteBy(customer2))
    console.log(customerServiceValidationDecorator.getById(7))
    console.log(customerServiceValidationDecorator.getSortedByField("firstName"))
}