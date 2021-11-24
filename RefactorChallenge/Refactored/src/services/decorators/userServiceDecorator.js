export default class UserServiceDecorator {
    constructor(userService){
        this.userService = userService
    }

    add(user) {

       return this.userService.add(user)
    }
    update(user){

        return this.userService.update(user)
    }
    deleteBy(user, predicate = (value,index,array) => value.id === user.id) {

       return this.userService.deleteBy(user,predicate)
    }

    getAllBy(filter = () => true) {
        return this.userService.getAllBy(filter)
    }

    getById(id) {
        return this.userService.getById(id)
    }

    getSortedByField(field) {
        return this.userService.getSortedByField(field)
    }
}