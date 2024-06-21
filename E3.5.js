function first (x) {
    function second (y){
        let sum = x + y;
        return sum;
    }
    return second(6);
}

let result = first(5)
console.log(result)