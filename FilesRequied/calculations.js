function convertCelsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }
  document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.querySelector("input[name='celsius']");
    const fahrenheitOutput = document.querySelector("#fahrenheit");
    celsiusInput.addEventListener("input", function() {
      const celsius = parseFloat(celsiusInput.value);
      fahrenheitOutput.innerHTML = convertCelsiusToFahrenheit(celsius);
    });
  });

  function fahrenheittocelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  document.addEventListener("DOMContentLoaded", function() {
    const fahrenheitinput = document.querySelector("input[name='fahrenheit']");
    const celsiusOutput = document.querySelector("#celsius");
    fahrenheitinput.addEventListener("input", function() {
        const fahrenheit = parseFloat(fahrenheitinput.value);
      celsiusOutput.innerHTML = fahrenheittocelsius(fahrenheit);
    });
  });