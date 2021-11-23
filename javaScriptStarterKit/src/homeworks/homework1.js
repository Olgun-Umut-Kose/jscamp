function* getDivisorsArray(...numbers) {

    for(let number of numbers){
        let list = []

        for (let i = 1; i <= number; i++) {
    
            if (number % i == 0){
            list.push(i)
            }
    
        }
        yield {divisors:list,number:number}
    }
}


function* isPrime(...numbers) {
    
    let arrayOfArrayOfDivisors = []
    for(let x of getDivisorsArray(...numbers)){
        arrayOfArrayOfDivisors.push(x.divisors)
    }
    for (let i = 0; i < numbers.length; i++) {
        
        arrayOfArrayOfDivisors[i].shift()
        arrayOfArrayOfDivisors[i].pop()
        if (arrayOfArrayOfDivisors[i].length === 0) {
            yield {number:numbers[i],prime:true}
        }
        else{ yield {number:numbers[i],prime:false}}
        
    }
    
}



function areTheyNumbersFriendlyNumbers(number1, number2) {
    
    let arrayOfArrayOfDivisors = []
    for(let x of getDivisorsArray(number1,number2)){
        arrayOfArrayOfDivisors.push(x.divisors)
    }
    for(let x of arrayOfArrayOfDivisors){
        x.pop()
    }
    let sumOfDivisorsOfNumber1ExcludingItself = arrayOfArrayOfDivisors[0].reduce((acc, x) => {return acc += x},0)
    let sumOfDivisorsOfNumber2ExcludingItself = arrayOfArrayOfDivisors[1].reduce((acc, x) => {return acc += x},0)
    //console.log(sumOfDivisorsOfNumber1ExcludingItself)
    //console.log(sumOfDivisorsOfNumber2ExcludingItself)
    return sumOfDivisorsOfNumber1ExcludingItself === number2 && sumOfDivisorsOfNumber2ExcludingItself === number1

}

function isPerfectNumber(number) {
    let arrayOfDivisorsOfNumber = getDivisorsArray(number).next().value.divisors
    arrayOfDivisorsOfNumber.pop()
    let sumOfDivisorsOfNumberExcludingItself = arrayOfDivisorsOfNumber.reduce((acc,x) => {return acc += x},0)
    //console.log(sumOfDivisorsOfNumberExcludingItself)
    return sumOfDivisorsOfNumberExcludingItself === number
    
}
for(let x of isPrime(1,2,3,4,5,6,7,8,9,10,11,12)){
    if (x.prime) {
        console.log(x.number +" Asal Sayıdır")
    }
}


console.log(areTheyNumbersFriendlyNumbers(220,284))
console.log(isPerfectNumber(6))
let numberList = []
for (let i = 1; i <= 1000; i++) {
    numberList.push(i)
    if (isPerfectNumber(i)) {
        console.log(i +" Mükemmel Sayıdır")
    } 
}




let primeNumberList = []
for(let x of isPrime(...numberList)){
    if (x.prime) {
        primeNumberList.push(x.number)
    }
}
console.log("Asal sayılar listenin içindedir", primeNumberList)




