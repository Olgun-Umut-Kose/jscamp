import { getUserInMemoryDalInstance } from "../constants/userDataAccessSingleton.js"
import { ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"

import User from "../models/user.js"
import CustomerService from "../services/customerService.js"
import CustomerServiceValidationDecorator from "../services/decorators/customerServiceValidationDecorator.js"
import EmployeeServiceValidationDecorator from "../services/decorators/employeeServiceValidationDecorator.js"

import UserServiceValidationDecorator from "../services/decorators/userServiceValidationDecorator.js"
import EmployeeService from "../services/employeeService.js"

import UserService from "../services/userService.js"
import CustomerValidator from "../services/validators/customerValidator.js"
import EmployeeValidator from "../services/Validators/employeeValidator.js"
import UserDeleteValidator from "../services/validators/userDeleteValidator.js"
import UserValidator from "../services/validators/userValidator.js"

console.log("User component yüklendi")
console.log("*************************************************************************************************************************************")

let dataAccess = getUserInMemoryDalInstance()
let userService = new UserService({loggerService:new MongoLogger(),userDataAccess:dataAccess})


let userValidator = new UserValidator()
let userDeleteValidator = new UserDeleteValidator()


let userServiceValidationDecorator = new UserServiceValidationDecorator(userService,{entityValidator:userValidator,deleteValidator:userDeleteValidator})


let user1 = new User({id:0,firstName:"Seda",lastName:"Yılmaz",city:"Ankara",age:"24"});
let user2 = new User({id:7,firstName:"hgfdhds",lastName:"hjkl",city:"Ankara",age:"21"});
let user3 = new User({id:0,city:"Ankara",age:"21"});
let user4 = new User({id:7,firstName:"hgfdhds",lastName:"hjkl",city:"Ankara",age:"21a"});

Test(user1,user2)
Test(user3,user4)


function Test(user1,user2) {
    console.log("---------------------------------------------------------------------------------------------------------------")
    console.log(userServiceValidationDecorator.add(user1))
    console.log(userServiceValidationDecorator.getAllBy())
    console.log(userServiceValidationDecorator.update(user2))
    console.log(userServiceValidationDecorator.getAllBy())
    console.log(userServiceValidationDecorator.deleteBy(user2))
    console.log(userServiceValidationDecorator.getById(7))
    console.log(userServiceValidationDecorator.getSortedByField("firstName"))
}

//22.00 Dersteyiz