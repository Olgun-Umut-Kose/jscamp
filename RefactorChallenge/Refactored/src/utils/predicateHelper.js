export default class PredicateHelper{
    static convertToNagative(predicate){
        return function (...args) {
            return !predicate.apply(null,args)
        }
    }
    static combineWithTypeFilter(predicate,type){
        return function (...args) {
            return args[0] instanceof type && predicate.apply(null,args)
        }
    }

}