// const stepen = (x, n) => {
//     let res = x**n;
//     console.log (res)
// };


// без использования оператора возведения в степень:

const stepen = (x, n) => {
    let result = 1;

    while (n) {
        result = x * result;
        n = n - 1;
    }

    return result;
};

const result = stepen(2, 3);
console.log(result)