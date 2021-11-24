import UserValidator from "./userValidator.js";

export default class UserDeleteValidator extends UserValidator{
    constructor(){
        super()
        this.funcs = [super.typeValidity]
    }


    * validate(obj){
        for(let func of this.funcs) {
            yield func.call(this,obj)
        }
        
    }
}