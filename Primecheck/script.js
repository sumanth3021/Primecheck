function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").textContent = "Generated Number: " + randomNumber;

    if (isPrime(randomNumber)) {
        document.getElementById("result").textContent = randomNumber + " is a Prime Number ✅";
    } else {
        document.getElementById("result").textContent = randomNumber + " is NOT a Prime Number ❌";
    }
}


function isPrime(num) {
    if (num <= 1) return false;
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    return count === 2;
}
