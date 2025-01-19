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
 CSS Code
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

#quiz-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

#quiz-question {
    font-size: 20px;
    margin-bottom: 20px;
}

input[type="radio"] {
    margin-right: 10px;
}

label {
    margin-right: 30px;
    cursor: pointer;
}

#submit-answer {
    display: block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

#submit-answer:hover {
    background-color: #0056b3;
}

#feedback {
    margin-top: 20px;
    font-size: 18px;
}
