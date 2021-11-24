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

// ! olanlar protected olacak
// okadar ardım bulamadım kullanımını sanırım yok hocam acil TS e geçelim lüften :D
//** aCı ÇEkiyORUM **/
export default class UserValidator extends BaseValidator{
    

    constructor(){
        super()
        this.funcs = [this.typeValidity,this.userRequiredFieldsValidity,this.ageIsNumberValidity]
    }
    
    //!
    typeValidity(user) {
        if(user instanceof User){
            return SuccessResult.CreateResult()
        }
        return ErrorResult.CreateResult(messages.notUser)
    }
    //!
    userRequiredFieldsValidity(user) {
        let requiredFields = ["firstName", "lastName", "city", "age"]
        let fieldList = []
        for(let field of requiredFields) {
            if(!user[field]) fieldList.push(field)
            
        }
        if(fieldList.length != 0) return ErrorDataResult.CreateResult({message:messages.requiredFieldsOfTheUserCannotBeEmpty,data:fieldList})
        return SuccessResult.CreateResult()
        
    }
    
    //!
    ageIsNumberValidity(user) {
        if (Number.isNaN(+user.age)) {
            
            return ErrorResult.CreateResult(messages.userAgeFieldsTypeError)
        }
        return SuccessResult.CreateResult()
        
    }

    * validate(obj){
        for(let func of this.funcs) {
            yield func.call(null,obj) // call metotun this değerini değiştirerek çalıştırır ancak ben değiştirmeden çalıştırmak için kullandım
        }
        
    }
}