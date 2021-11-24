import { messages } from "../constants/messages.js";
import SuccessDataResult from "../models/results/successDataResult.js";
import SuccessResult from "../models/results/successResult.js";
import ErrorResult from "../models/results/errorResult.js";
import UserService from "./userService.js";
import PredicateHelper from "../utils/predicateHelper.js";
import Customer from "../models/customer.js";

export default class CustomerService extends UserService {
    constructor({loggerService, userDataAccess}) {
        super({loggerService:loggerService,userDataAccess:userDataAccess})
    }

    add(customer) {

        this.userDataAccess.add(customer)

        this.loggerService.log(customer,messages.customerAdded);
        return SuccessResult.CreateResult(messages.customerAdded)
    }
    update(customer){

        this.userDataAccess.update(customer)
        
        this.loggerService.log(customer,messages.customerUptaded)
        return SuccessResult.CreateResult(messages.customerUptaded)
    }
    deleteBy(customer, predicate = (value,index,array) => value.id === customer.id) {
        const combinedPredicate = PredicateHelper.combineWithTypeFilter(predicate,Customer)
        this.userDataAccess.deleteBy(customer, combinedPredicate);
        this.loggerService.log(customer,messages.customerDeleted);
        return SuccessResult.CreateResult(messages.customerDeleted)
    }

    getAllBy(filter = () => true) {
        const combinedPredicate = PredicateHelper.combineWithTypeFilter(filter,Customer)
        return SuccessDataResult.CreateResult({message:messages.successful,data:this.userDataAccess.getAllBy(combinedPredicate)}) 
    }

    getById(id) {
        const combinedPredicate = PredicateHelper.combineWithTypeFilter((u) => u.id === id,Customer)
        const customer = this.userDataAccess.getBy(combinedPredicate)
        if(!customer) return ErrorResult.CreateResult(messages.customerNotFind)
        return SuccessDataResult.CreateResult({message:messages.successful,data:customer})
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