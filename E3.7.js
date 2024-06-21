const a = parseInt(prompt("Введите первое число:"), 10);
const b = parseInt(prompt("Введите второе число:"), 10);

if (a <= b) {
    const stepen = setInterval(function () {
        console.log (a);
        if (a === b) {clearInterval(stepen)};
        a++;
        
}, 1000);
    
} else {
    console.log('Ошибка. Первое число должно быть меньше вторго или быть равным ему')
}