function segmentedSieve(n, m) {
    const limit = Math.floor(Math.sqrt(m)) + 1;
    const isPrime = Array(limit).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < limit; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i < limit; i++) {
        if (isPrime[i]) primes.push(i);
    }

    const rangeSize = m - n + 1;
    const rangePrimes = Array(rangeSize).fill(true);

    for (const prime of primes) {
        let start = Math.max(prime * prime, Math.ceil(n / prime) * prime);
        for (let j = start; j <= m; j += prime) {
            rangePrimes[j - n] = false;
        }
    }

    const result = [];
    for (let i = 0; i < rangeSize; i++) {
        if (rangePrimes[i] && n + i > 1) {
            result.push(n + i);
        }
    }

    console.log(result.join(" "));
}
segmentedSieve(10, 50)





/*******************Another Solution ***************************************/

// function printPrimes(n, m) {
//     function isPrime(num) {
//         if (num < 2) return false;
//         for (let i = 2; i * i <= num; i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     }

//     let primes = [];
//     for (let i = n; i <= m; i++) {
//         if (isPrime(i)) {
//             primes.push(i);
//         }
//     }
//     console.log(primes.join(" "));
// }

// printPrimes(10, 50);
