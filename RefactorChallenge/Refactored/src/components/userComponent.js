import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import UserInMemoryDataAccess from "../dataAccess/userInMemoryDataAccess.js"
import Customer from "../models/customer.js"
import UserService from "../services/userService.js"
import UserValidator from "../services/Validators/userValidator.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let dataAccess = new UserInMemoryDataAccess()
let userService = new UserService({loggerService:logger1,userDataAccess:dataAccess})
let v = new UserValidator()
console.log(v._typeValidity())

var getECMAVersion = function() {
    var rv ="";
     
    return rv = null, "function" == typeof RegExp && (rv = {
        edition: 3,
        date_published: "1999-12"
    }), "function" == typeof Array.isArray && (rv = {
        edition: 5,
        date_published: "2009-12"
    }), "function" != typeof Array.find && "function" != typeof Array.findIndex || (rv = {
        edition: 6,
        date_published: "2015-06",
        name: "ECMAScript 2015",
        name_code: "ES2015"
    }), "function" == typeof Array.prototype.includes && (rv = {
        edition: 7,
        date_published: "2016-06",
        name: "ECMAScript 2016",
        name_code: "ES2016"
    }), "function" == typeof Object.entries && (rv = {
        edition: 8,
        date_published: "2017-06",
        name: "ECMAScript 2017",
        name_code: "ES2017"
    }), "undefined" != typeof Promise && "function" == typeof Promise.prototype.finally && (rv = {
        edition: 9,
        date_published: "2018-06",
        name: "ECMAScript 2018",
        name_code: "ES2018"
    }), "function" != typeof Object.fromEntries && "function" != typeof String.prototype.trimStart || (rv = {
        edition: 10,
        date_published: "2019-06",
        name: "ECMAScript 2019",
        name_code: "ES2019"
    }), "function" == typeof BigInt && (rv = {
        edition: 11,
        date_published: "2020-06",
        name: "ECMAScript 2020",
        name_code: "ES2020"
    }), rv
}
console.log(getECMAVersion())

let customerToAdd = new Customer({id:0,firstName:"Seda",lastName:"Yılmaz",city:"Ankara",age:"fdgdfg"});
let customerToUpdate = new Customer({id:6,firstName:"asdfg",lastName:"hjkl",city:"Ankara",age:"fdgdfg"});

userService.add(customerToAdd)
console.log(userService.getAllBy())
userService.update(customerToUpdate)
console.log(userService.getAllBy())
userService.deleteBy(customerToAdd)
console.log(userService.getById(6))
console.log(userService.getSortedByField("firstName"))
//22.00 Dersteyiz