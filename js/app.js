function isPrime(num) {
  if (num <= 1) return false; 

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return true; 
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
