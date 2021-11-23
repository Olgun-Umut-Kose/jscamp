export default class PredicateHelper{
    static convertToNagative(predicate){
        return function (...args) {
            return !predicate.apply(null,args)
        }
    }

}