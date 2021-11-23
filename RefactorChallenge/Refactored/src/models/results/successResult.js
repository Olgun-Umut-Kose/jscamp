import Result from "./result.js";

export default class SuccessResult{

    
    static CreateResult(message){
        return new Result(this,{success:true, message:message})
    }
}