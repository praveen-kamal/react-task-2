import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleButtonClick = (value) => {
        if (value === "=") {
            try {
                let calculatedResult = eval(input);

                if (calculatedResult != Infinity) {
                    calculatedResult = calculatedResult.toFixed(3);
                    setResult(calculatedResult);
                } else {
                    setResult("Error");
                }
            } catch (error) {
                setResult("Error");
            }
            setInput("");
        } else if (value === "C") {
            setInput("");
            setResult("");
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <input type="text" value={input} readOnly />
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                <div className="button-row">
                    <button onClick={() => handleButtonClick("7")}>7</button>
                    <button onClick={() => handleButtonClick("8")}>8</button>
                    <button onClick={() => handleButtonClick("9")}>9</button>
                    <button onClick={() => handleButtonClick("+")}>+</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleButtonClick("4")}>4</button>
                    <button onClick={() => handleButtonClick("5")}>5</button>
                    <button onClick={() => handleButtonClick("6")}>6</button>
                    <button onClick={() => handleButtonClick("-")}>-</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleButtonClick("1")}>1</button>
                    <button onClick={() => handleButtonClick("2")}>2</button>
                    <button onClick={() => handleButtonClick("3")}>3</button>
                    <button onClick={() => handleButtonClick("*")}>*</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleButtonClick("0")}>0</button>
                    <button onClick={() => handleButtonClick("C")}>C</button>
                    <button onClick={() => handleButtonClick("=")}>=</button>
                    <button onClick={() => handleButtonClick("/")}>/</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
