// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num, multiplier){
    if(multiplier === 0) return 1
    if(multiplier === 1) return num
    return num = num*power(num, --multiplier)
}