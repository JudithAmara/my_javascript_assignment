const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  console.log(isPrime(25)); // Output: false
  console.log(isPrime(23)); // Output: true
  
  