function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}

function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").value = celsius.toFixed(2);
}

function resetFields() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
}