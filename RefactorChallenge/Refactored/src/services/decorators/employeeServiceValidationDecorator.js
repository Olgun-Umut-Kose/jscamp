import SuccessResult from "../../models/results/successResult.js";
import BaseValidator from "../Validators/baseValidator.js";
import EmployeeServiceDecorator from "./employeeServiceDecorator.js";

function validate(employee) {
    let generator = this.validator.validate(employee)
        for(let item of generator) {
            if(!item.success) return item
        }
        return SuccessResult.CreateResult()
}

export default class EmployeeServiceValidationDecorator extends EmployeeServiceDecorator{
    constructor(employeeService,{entityValidator,deleteValidator}){
        super(employeeService)
        this.validator = entityValidator
        this.deleteValidator = deleteValidator

    }

    add(employee) {
        let result = validate.call(this,employee)
        if(!result.success) return result;

        return super.add(employee)
        
        
     }
     update(employee){
        let result = validate.call(this,employee)
        if(!result.success) return result;

        return super.update(employee)
     }
     deleteBy(employee, predicate = (value,index,array) => value.id === employee.id) {

        let result = validate.call(this,employee)
        if(!result.success) return result;

        return super.deleteBy(employee,predicate)
     }
 
     getAllBy(filter = () => true) {

        return super.getAllBy(filter)
     }
 
     getById(id) {
        return super.getById(id)
     }
 
     getSortedByField(field) {
         return super.getSortedByField(field)
     }
}