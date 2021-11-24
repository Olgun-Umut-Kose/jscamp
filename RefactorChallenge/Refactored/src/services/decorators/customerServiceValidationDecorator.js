import SuccessResult from "../../models/results/successResult.js";
import BaseValidator from "../Validators/baseValidator.js";
import CustomerServiceDecorator from "./customerServiceDecorator.js";

function validate(customer,validator) {
    let generator = validator.validate(customer)
        for(let item of generator) {
            if(!item.success) return item
        }
        return SuccessResult.CreateResult()
}

export default class CustomerServiceValidationDecorator extends CustomerServiceDecorator{
    constructor(customerService,{entityValidator,deleteValidator}){
        super(customerService)
        this.validator = entityValidator
        this.deleteValidator = deleteValidator

    }

    add(customer) {
        let result = validate(customer,this.validator)
        if(!result.success) return result;

        return super.add(customer)
        
        
     }
     update(customer){
        let result = validate(customer,this.validator)
        if(!result.success) return result;

        return super.update(customer)
     }
     deleteBy(customer, predicate = (value,index,array) => value.id === customer.id) {

        let result = validate(customer,this.deleteValidator)
        if(!result.success) return result;

        return super.deleteBy(customer,predicate)
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