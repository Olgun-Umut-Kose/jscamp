export default class PredicateHelper{
    static convertToNagative(predicate){
        return function (...args) {
            !predicate.apply(null,args)
        }
    }

}