let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459) * (5 / 9),
        celcius: (fahrenheit - 32) * (5 / 9)
    }
}

let temps = convertFahrenheit(74);
console.log(temps); 

//  OUTPUT: 
/*
{
  fahrenheit: 74,
  kelvin: 296.11111111111114,
  celcius: 23.333333333333336
}

*/
