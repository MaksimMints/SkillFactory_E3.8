function numberIsPrime(number){
    let isPrime, result;
    isPrime = true;
  
      if (number >= 1 && number <= 1000) {
        for (let i = 2; i < number; i++){
          if (number % i === 0) {
            isPrime = false;
        }
      } 
      result = isPrime ? `Число ${number} - простое число` : `Число ${number} - составное число`;
      } else if (number === 0){
        result = 'Вы ввели 0. Это не простое и не составное число';
      } else {
        result = 'Данные неверны';
    }
    return result;
  }
  
  console.log(numberIsPrime(1));