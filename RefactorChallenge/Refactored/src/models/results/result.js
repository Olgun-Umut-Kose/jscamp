import { messages } from "../../constants/messages.js"
import DataResult from "./dataResult.js"
import ErrorDataResult from "./errorDataResult.js"
import ErrorResult from "./errorResult.js"
import SuccessDataResult from "./successDataResult.js"
import SuccessResult from "./successResult.js"

export default class Result{

    constructor(child,{success,message}) {
        this.success = success
        this.message = message
        if(child.name != SuccessResult.name && child.name != ErrorResult.name && child.name != DataResult.name && child.name != SuccessDataResult.name && child.name != ErrorDataResult.name) throw new Error(messages.privateConstructor)

    }
    

    
}