function isPrime(num) {
  if (num <= 1) return false;       
  if (num === 2) return true;       
  if (num % 2 === 0) return false;  
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false; 
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
    
  const foundPrime = numbers.find(num => !isNaN(num) && isPrime(num));
  
  if (foundPrime !== undefined) {
    resultadoElement.textContent = `El primer número primo es: ${foundPrime}`;
  } else {
    resultadoElement.textContent = "No se encontraron números primos.";
  }
}
