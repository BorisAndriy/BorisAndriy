grape

const getRandomElement = array => array[getRandomIndex(array)];
const getUniqueValues = array => [...new Set(array)];
const filterEvenNumbers = numbers => numbers.filter(isEven);

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

const squareRoot = num => Math.sqrt(num);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
apple * orange
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const filterEvenNumbers = numbers => numbers.filter(isEven);
12,76,58 / 98,61,10,37,13,29,78,39,21,4,32,84,62,47,28,9,58,76,25,54,14,78,56,80,14,63,3,24,21,98,60,13,44,65,82

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const isEven = num => num % 2 === 0;
const getRandomElement = array => array[getRandomIndex(array)];

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
kiwi / orange
const isPalindrome = str => str === str.split("").reverse().join("");
const isEven = num => num % 2 === 0;
orange

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
