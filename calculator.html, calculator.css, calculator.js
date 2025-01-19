<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="calculator.css">
</head>
<body>
    <div id="calculator-container">
        <input type="number" id="number1" placeholder="Number 1">
        <input type="number" id="number2" placeholder="Number 2">

        <button id="add">+</button>
        <button id="subtract">-</button>
        <button id="multiply">*</button>
        <button id="divide">/</button>

        <div id="result">Result: <span id="calculation-result">0</span></div>
    </div>
    <script src="calculator.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

#calculator-container {
    text-align: center;
}

input[type="number"] {
    margin: 10px;
    padding: 10px;
    width: 200px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    cursor: pointer;
}

#result {
    margin-top: 20px;
    font-size: 20px;
}
unction add(number1, number2) {
    return number1 + number2;}
}
