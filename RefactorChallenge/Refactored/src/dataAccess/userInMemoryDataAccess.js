// burda diğer kampı izleyenler varsa neden InMemoryBase benzeri bi sınıf açmadın diye soracaklardır
// nedeni genel olarak bu BaseRepository olayı desteklenmemesi neden desteklenmiyor diye soracak olursanız
// sınıfın içinde kullanılmayan metot ve alanların tutulmaması gerektiğini düşünmeleri gereksiz yer tutmasın diye yani
// işte silme olayı bulunmayan entity ler için vs. 
// tamam benzer şeyleri her entity için tekrar tekrar yazmak amelelik gibi duruyor ama sonuç olarak kod tekrarı vb bişey yok

import { users } from "../constants/defaultData/users.js";
import PredicateHelper from "../utils/predicateHelper.js";
import UserDataAccess from "./userDataAccess.js";

// bu arada normalde her entity için repository/data access sınıfı açmam gerek ama
// ödevi hızlı verebilmek adına Table per Hierarchy (TPH) miras stratejisini kullanmış varsayalım
export default class UserInMemoryDataAccess extends UserDataAccess{

    constructor(){
        super()
        this.users = users;
    }
    add(user){
        //otomatik artan yapmak istedim
        const lastUser = this.users[this.users.length-1]
        const lastid = lastUser.id
        user.id = lastid + 1
        
        this.users.push(user)
    }
    update(user){
        const index = this.users.findIndex(x => x.id === user.id)
        this.users[index] = user
    }
    deleteBy(user,predicate = (value,index,array) => value.id === user.id){
        this.users = this.users.filter((value,index,array) => PredicateHelper.convertToNagative(predicate).call(null,value,index,array,user)) 
    }
    getAllBy(filterPredicate = (value,index,array) => true){
        
        return this.users.filter((value,index,array) => filterPredicate.call(null,value,index,array))
    }
    getBy(filter){
        return this.users.find((value,index,obj) => filter.call(null,value,index,obj))
    }
}