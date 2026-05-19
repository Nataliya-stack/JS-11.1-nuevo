// Простая функция для проверки, является ли число простым
function isPrime(num) {
  if (num <= 1) return false; // Числа 1, 0 и отрицательные — не простые
  
  // Проверяем все числа от 2 до num - 1
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Если нашли делитель, число не простое
    }
  }
  return true; // Если делителей нет, число простое
}

function result() {
  const inputElement = document.getElementById('input');
  const resultadoElement = document.getElementById('resultado');
  const rawInput = inputElement.value.trim();

  if (rawInput === "") {
    resultadoElement.textContent = "Por favor, escribe números.";
    return;
  }

  const numbers = rawInput.split(',').map(num => Number(num.trim()));
  
  let index = 0;
  let foundPrime = null;

  do {
    if (numbers.length === 0) break; 

    let currentNumber = numbers[index];

    if (!isNaN(currentNumber) && isPrime(currentNumber)) {
      foundPrime = currentNumber;
    }

    index++; 
    
  } while (foundPrime === null && index < numbers.length); 

  if (foundPrime !== null) {
    resultadoElement.textContent = `El primer número primo es: ${foundPrime}`;
  } else {
    resultadoElement.textContent = "No se encontraron números primos.";
  }
}