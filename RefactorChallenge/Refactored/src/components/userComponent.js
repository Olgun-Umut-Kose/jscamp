import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import UserInMemoryDataAccess from "../dataAccess/userInMemoryDataAccess.js"
import Customer from "../models/customer.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let dataAccess = new UserInMemoryDataAccess()
let userService = new UserService({loggerService:logger1,userDataAccess:dataAccess})




let customerToAdd = new Customer({id:0,firstName:"Seda",lastName:"Yılmaz",city:"Ankara",age:"fdgdfg"});

userService.add(customerToAdd)
console.log(userService.getAllBy())
console.log(userService.getSortedByField("firstName"))
//22.00 Dersteyiz