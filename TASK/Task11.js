let arr = [1,2,3,4,5,6,7,83]
do {
    let a = prompt("Enter the number")
    a = Number.parseInt(a)
    arr.push(a)
} while(a!=0)
console.log(arr)

