import ErrorResult from "../../models/results/errorResult.js";
import SuccessResult from "../../models/results/successResult.js";
import UserValidator from "./userValidator.js";
import { messages } from "../../constants/messages.js";
import Employee from "../../models/employee.js";
import ErrorDataResult from "../../models/results/errorDataResult.js";


export default class EmployeeValidator extends UserValidator{

    
    constructor(){
        super()
        this.funcs = [this.typeValidity,this.employeeRequiredFieldsValidity,this.ageIsNumberValidity]
    }
    
    //!
    typeValidity(employee) {
        if(employee instanceof Employee){
            return SuccessResult.CreateResult()
        }
        return ErrorResult.CreateResult(messages.notEmployee)
    }
    //!
    employeeRequiredFieldsValidity(employee) {
        let requiredFields = ["salary"]
        let fieldList = []
        for(let field of requiredFields) {
            if(!employee[field]) fieldList.push(field)
            
        }
        if(fieldList.length != 0) return ErrorDataResult.CreateResult({message:messages.requiredFieldsOfTheEmployeeCannotBeEmpty,data:fieldList})
        return super.userRequiredFieldsValidity(employee)
        
    }

    * validate(obj){
        for(let func of this.funcs) {
            yield func.call(null,obj)
        }
        
    }

}