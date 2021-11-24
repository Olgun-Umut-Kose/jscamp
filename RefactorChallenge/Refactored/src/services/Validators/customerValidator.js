import ErrorResult from "../../models/results/errorResult.js";
import SuccessResult from "../../models/results/successResult.js";
import UserValidator from "./userValidator.js";
import Customer from "../../models/customer.js"
import { messages } from "../../constants/messages.js";
import ErrorDataResult from "../../models/results/errorDataResult.js";

export default class CustomerValidator extends UserValidator{

    constructor(){
        super()
        this.funcs = [this.typeValidity,this.customerRequiredFieldsValidity,super.ageIsNumberValidity]
    }
    
    //!
    typeValidity(customer) {
        if(customer instanceof Customer){
            return SuccessResult.CreateResult()
        }
        return ErrorResult.CreateResult(messages.notCustomer)
    }
    //!
    customerRequiredFieldsValidity(customer) {
        let requiredFields = ["creditCardNumber"]
        let fieldList = []
        for(let field of requiredFields) {
            if(!customer[field]) fieldList.push(field)
            
        }
        if(fieldList.length != 0) return ErrorDataResult.CreateResult({message:messages.requiredFieldsOfTheCustomerCannotBeEmpty,data:fieldList})
        return super.userRequiredFieldsValidity(customer)
        
    }

    * validate(obj){
        for(let func of this.funcs) {
            yield func.call(null,obj)
        }
        
    }

}