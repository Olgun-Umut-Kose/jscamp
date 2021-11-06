function getDivisorsArray(number) {
    let list = []
    for (let i = 1; i <= number; i++) {
    
        if (number % i == 0) {
            list.push(i)
        }
    
    }
    return list
}


function* isPrime(...numbers) {
    

    for (let i = 0; i < numbers.length; i++) {
        let arrayOfDivisorsOfNumber = getDivisorsArray(numbers[i])
        arrayOfDivisorsOfNumber.shift()
        arrayOfDivisorsOfNumber.pop()
        if (arrayOfDivisorsOfNumber.length === 0) {
            yield {number:numbers[i],prime:true}
        }
        else{ yield {number:numbers[i],prime:false}}
        
    }
    
}

function areTheyNumbersFriendlyNumbers(number1, number2) {
    let arrayOfDivisorsOfNumber1 = getDivisorsArray(number1)
    let arrayOfDivisorsOfNumber2 = getDivisorsArray(number2)
    arrayOfDivisorsOfNumber1.pop()
    arrayOfDivisorsOfNumber2.pop()
    let sumOfDivisorsOfNumber1ExcludingItself = arrayOfDivisorsOfNumber1.reduce((acc, x) => {return acc += x},0)
    let sumOfDivisorsOfNumber2ExcludingItself = arrayOfDivisorsOfNumber2.reduce((acc, x) => {return acc += x},0)
    //console.log(sumOfDivisorsOfNumber1ExcludingItself)
    //console.log(sumOfDivisorsOfNumber2ExcludingItself)
    return sumOfDivisorsOfNumber1ExcludingItself === number2 && sumOfDivisorsOfNumber2ExcludingItself === number1

}

function isPerfectNumber(number) {
    let arrayOfDivisorsOfNumber = getDivisorsArray(number)
    arrayOfDivisorsOfNumber.pop()
    let sumOfDivisorsOfNumberExcludingItself = arrayOfDivisorsOfNumber.reduce((acc,x) => {return acc += x},0)
    //console.log(sumOfDivisorsOfNumberExcludingItself)
    return sumOfDivisorsOfNumberExcludingItself === number
    
}
let isPrimeGenerator = isPrime(1,2,3,4,5,6,7,8,9,10,11,12)
let isPrimeNext = isPrimeGenerator.next()
while (isPrimeNext.done === false) {
    
    let isPrimeValue = isPrimeNext.value
    
    if (isPrimeValue.prime) {
        console.log(isPrimeValue.number + " Asal Sayıdır")
    }
    isPrimeNext = isPrimeGenerator.next()
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



let isPrimeGenerator2 = isPrime(...numberList)
let isPrimeNext2 = isPrimeGenerator2.next()
let primeNumberList = []
while (isPrimeNext2.done === false) {
    
    let isPrimeValue = isPrimeNext2.value
    
    if (isPrimeValue.prime) {
        primeNumberList.push(isPrimeValue.number)
    }
    isPrimeNext2 = isPrimeGenerator2.next()
}
console.log("Asal sayılar listenin içindedir", primeNumberList)




