import { messages } from "../constants/messages.js";
import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js";
import UserDataAccess from "../dataAccess/userDataAccess.js";
import SuccessDataResult from "../models/results/successDataResult.js";
import SuccessResult from "../models/results/successResult.js";
import ErrorResult from "../models/results/errorResult.js";

export default class UserService {
    constructor({loggerService, userDataAccess}) {
        if (loggerService instanceof BaseLogger) this.loggerService = loggerService;
        if (userDataAccess instanceof UserDataAccess) this.userDataAccess = userDataAccess;
    }

    add(user) {

        this.userDataAccess.add(user)

        this.loggerService.log(user,messages.userAdded);
        return SuccessResult.CreateResult(messages.userAdded)
    }
    update(user){

        this.userDataAccess.update(user)
        
        this.loggerService.log(user,messages.userUpdated)
        return SuccessResult.CreateResult(messages.userUpdated)
    }
    deleteBy(user, predicate = (value,index,array) => value.id === user.id) {
        const firstState = this.getAllBy()
        this.userDataAccess.deleteBy(user, predicate);
        const lastState = this.getAllBy()
        if(firstState.data.length == lastState.data.length) return ErrorResult.CreateResult(messages.failed)
        this.loggerService.log(user,messages.userDeleted)
        return SuccessResult.CreateResult(messages.userDeleted)
    }

    getAllBy(filter = () => true) {
        return SuccessDataResult.CreateResult({message:messages.successful,data:this.userDataAccess.getAllBy(filter)}) 
    }

    getById(id) {
        const user = this.userDataAccess.getBy((u) => u.id === id)
        if(!user) return ErrorResult.CreateResult(messages.userNotFind)
        return SuccessDataResult.CreateResult({message:messages.successful,data:user})
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
