
import DataResult from "./dataResult.js";


export default class SuccessDataResult{
    

    static CreateResult({message,data}){
        
        return new DataResult(this,{success:true,message:message,data:data})
    }
}