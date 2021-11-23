import { messages } from "../../constants/messages.js";
import ErrorResult from "../../models/results/errorResult.js";
import ErrorDataResult from "../../models/results/errorDataResult.js";
import SuccessResult from "../../models/results/successResult.js";
import User from "../../models/user.js";
import BaseValidator from "./baseValidator.js";

// bu sınıf tüm user nesnesine validasyon uygulamak için hazırlanmıştır
// operasyona özel validasyon yapılması gerekirse yeni sınıf açıp Decorator patternini uygulamamız yeterlidir
// burdaki validasyonları operasyonda özel sınıfta kullanmak gerekirse 
// bu sınıftan extends edip "super.<metot adı>" ile metotlar kullanılabilir
export default class UserValidator extends BaseValidator{
    #privateFuncs;

    constructor(){
        this.#privateFuncs = [this.#typeValidity,this.#userRequiredFieldsValidity,this.#ageIsNumberValidity]
    }
    
    #typeValidity(user) {
        if(user instanceof User){
            return SuccessResult.CreateResult()
        }
        return ErrorResult.CreateResult(messages.notUser)
    }
    
    #userRequiredFieldsValidity(user) {
        let requiredFields = ["firstName", "lastName", "city", "age"]
        let fieldList = []
        for(let field of requiredFields) {
            if(!user[field]) fieldList.push(field)
            
        }
        ErrorDataResult.CreateResult({message:messages.requiredFieldsOfTheUserCannotBeEmpty,data:fieldList})
        return SuccessResult.CreateResult()
        
    }

    #ageIsNumberValidity(user) {
        if (Number.isNaN(+user.age)) {
            ErrorResult.CreateResult(messages.userAgeFieldsTypeError)
        }
        return SuccessResult.CreateResult()
        
    }

    * validate(obj){
        for(let func of this.#privateFuncs) {
            yield func.call(this,obj) // call metotun this değerini değiştirerek çalıştırır ancak ben değiştirmeden çalıştırmak için kullandım
        }
        
    }
}