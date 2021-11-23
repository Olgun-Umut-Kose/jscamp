import { messages } from "../../constants/messages.js"
import ErrorDataResult from "./errorDataResult.js"
import Result from "./result.js"
import SuccessDataResult from "./successDataResult.js"

export default class DataResult extends Result {

    constructor(child,{ success, message, data }) {
        super(child,{ success: success, message: message })
        this.data = data
        if(child.name != SuccessDataResult.name && child.name != ErrorDataResult.name) throw new Error(messages.privateConstructor)

    }


    
}