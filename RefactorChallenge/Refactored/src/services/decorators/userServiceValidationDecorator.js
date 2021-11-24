import SuccessResult from "../../models/results/successResult.js";
import BaseValidator from "../Validators/baseValidator.js";
import UserServiceDecorator from "./userServiceDecorator.js";

let validate = (user,validator) => {
    let generator = validator.validate(user)
        for(let item of generator) {
            if(!item.success) return item
        }
        return SuccessResult.CreateResult()
}

export default class UserServiceValidationDecorator extends UserServiceDecorator{
    constructor(userService,{entityValidator,deleteValidator}){
        super(userService)
        this.validator = entityValidator
        this.deleteValidator = deleteValidator
    }

    add(user) {
        let result = validate(user,this.validator)
        if(!result.success) return result;

        return super.add(user)
        
        
     }
     update(user){
        let result = validate(user,this.validator)
        if(!result.success) return result;

        return super.update(user)
     }
     deleteBy(user, predicate = (value,index,array) => value.id === user.id) {

        let result = validate(user,this.deleteValidator)
        if(!result.success) return result;

        return super.deleteBy(user,predicate)
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