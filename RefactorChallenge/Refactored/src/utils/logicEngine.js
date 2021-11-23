import { messages } from "../constants/messages";
import ErrorResult from "../models/results/errorResult";
import Result from "../models/results/result";
import SuccessResult from "../models/results/successResult";

export default class LogicEngine{
    static run(...logics){
        for(let logic of logics) {
            if(!logic instanceof Result) return ErrorResult(messages.logicIsNotOfResultType)
            if(!logic.success) return logic
        }
        return SuccessResult.createResult()
        
        
    }
}