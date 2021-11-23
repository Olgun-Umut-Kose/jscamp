import DataResult from "./dataResult.js";

export default class ErrorDataResult{

    static CreateResult({message,data}){
        return new DataResult(this,{success:false,message:message,data:data})
    }
}