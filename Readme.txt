Solution Overview
To solve the problem efficiently, I implemented the Segmented Sieve Algorithm, a powerful technique for finding prime numbers in a range [𝑛,𝑚]
This method leverages:

The Sieve of Eratosthenes to precompute small prime numbers up to sqrt m
​
A segmented approach to mark non-prime numbers in the range 
[𝑛,𝑚] using these small primes.