
export class BaseLogger{
    log(data,message){
        console.log("Default logger : ", data,message)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data,message){
        console.log("Logged to Elastic",data,message)
    }
}

export class MongoLogger extends BaseLogger{
    log(data,message){
        console.log("Logged to Mongo", data,message)
    }
}

