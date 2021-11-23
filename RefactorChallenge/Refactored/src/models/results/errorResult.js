import { messages } from "../../constants/messages.js";
import Result from "./result.js";

export default class ErrorResult{
    
    static CreateResult(message){
        return new Result(this,{success:false,message:message})
    }
}