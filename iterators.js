/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function(array) {
  // Your code here
  array.forEach(element => {
    console.log(element);
  });
};

// const logger = array =>(array.forEach(element => {
//   console.log(element);})

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

const toCelsius = function(temperatures) {
  // Your code here
  let celsius = temperatures.map(temp => {
    return (temp - 32) * (5 / 9);
  });
  return celsius;
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/

const hottestDays = function(temperatures, threshhold) {
  // Your code here
  let threshholdTemo = temperatures.filter(temp => temp > threshhold);
  return threshholdTemo;
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

const logHottestDays = function(temperatures, threshhold) {
  // Your code here
  let x = hottestDays(temperatures, threshhold);
  let y = toCelsius(x);
  let z = logger(y);
  return z;
};

// export { logger, toCelsius, hottestDays, logHottestDays };
