import { messages } from "../constants/messages.js";
import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js";
import UserDataAccess from "../dataAccess/userDataAccess.js";
import SuccessDataResult from "../models/results/successDataResult.js";
import SuccessResult from "../models/results/successResult.js";

export default class UserService {
    constructor({loggerService, userDataAccess}) {
        if (loggerService instanceof BaseLogger) this.loggerService = loggerService;
        if (userDataAccess instanceof UserDataAccess) this.userDataAccess = userDataAccess;
    }

    add(user) {

        this.userDataAccess.add(user);

        this.loggerService.log(user);
        return SuccessResult.CreateResult(messages.userAdded)
    }
    update(user){

        this.userDataAccess.update(user)
        
        this.loggerService.log(user)
        return SuccessResult.CreateResult(messages.userUpdated)
    }
    deleteBy(user, predicate = (x) => x.id === user.id) {

        this.userDataAccess.deleteBy(user, predicate);
        return SuccessResult.CreateResult(messages.userDeleted)
    }

    getAllBy(filter = () => true) {
        return SuccessDataResult.CreateResult({message:messages.successful,data:this.userDataAccess.getAllBy(filter)}) 
    }

    getById(id) {
        return SuccessDataResult.CreateResult({message:messages.successful,data:this.userDataAccess.getBy((u) => u.id === id)})
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
