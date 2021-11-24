import { messages } from "../constants/messages.js";
import SuccessDataResult from "../models/results/successDataResult.js";
import SuccessResult from "../models/results/successResult.js";
import ErrorResult from "../models/results/errorResult.js";
import UserService from "./userService.js";
import PredicateHelper from "../utils/predicateHelper.js";
import Employee from "../models/employee.js";

export default class EmployeeService extends UserService {
    constructor({loggerService, userDataAccess}) {
        super({loggerService:loggerService,userDataAccess:userDataAccess})
    }

    add(employee) {

        this.userDataAccess.add(employee)

        this.loggerService.log(employee,messages.employeeAdded);
        return SuccessResult.CreateResult(messages.employeeAdded)
    }
    update(employee){

        this.userDataAccess.update(employee)
        
        this.loggerService.log(employee,messages.employeeUptaded)
        return SuccessResult.CreateResult(messages.employeeUptaded)
    }
    deleteBy(employee, predicate = (value,index,array) => value.id === employee.id) {
        const combinedPredicate = PredicateHelper.combineWithTypeFilter(predicate,Employee)
        this.userDataAccess.deleteBy(employee, combinedPredicate);
        this.loggerService.log(employee,messages.employeeDeleted);
        return SuccessResult.CreateResult(messages.employeeDeleted)
    }

    getAllBy(filter = () => true) {
        const combinedPredicate = PredicateHelper.combineWithTypeFilter(filter,Employee)
        return SuccessDataResult.CreateResult({message:messages.successful,data:this.userDataAccess.getAllBy(combinedPredicate)}) 
    }

    getById(id) {
        const combinedPredicate = PredicateHelper.combineWithTypeFilter((u) => u.id === id,Employee)
        const employee = this.userDataAccess.getBy(combinedPredicate)
        if(!employee) return ErrorResult.CreateResult(messages.employeeNotFind)
        return SuccessDataResult.CreateResult({message:messages.successful,data:employee})
    }

    getSortedByField(field) {
        return SuccessDataResult.CreateResult({message:messages.successful,data:
            this.getAllBy().data.sort((user1, user2) => {
            if (user1[field] > user2[field]) return 1;
            else if (user1[field] === user2[field]) return 0;
            else return -1;
        })})
    }
}