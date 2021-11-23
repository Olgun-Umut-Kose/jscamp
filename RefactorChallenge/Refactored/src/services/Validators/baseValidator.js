import SuccessResult from "../../models/results/successResult.js";

export default class BaseValidator{

    * validate(obj){
        yield SuccessResult.CreateResult()
    
    }
}