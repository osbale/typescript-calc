import React, { useState } from "react";
import "./Calculator.css";

export const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const stringInput = (
    inputString: string,
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    switch (inputString) {
      case "0":
      case "1":
        setInput(input + inputString);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        if (
          input[input.length - 1] !== "+" &&
          input[input.length - 1] !== "-" &&
          input[input.length - 1] !== "*" &&
          input[input.length - 1] !== "/" &&
          input.length
        )
          setInput(input + inputString);
        break;
      case "C":
        setInput("");
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const arrayOfOperations = ["+", "-", "/", "*"].includes(
      input[input.length - 1]
    )
      ? input.substring(0, input.length - 1).split(/(\+|-|\/|\*)/g)
      : input.split(/(\+|-|\/|\*)/g);

    let sum = 0;
    for (let i = 0; i < arrayOfOperations.length; i++) {
      if (i === 0) {
        sum = parseInt(arrayOfOperations[i]);
        continue;
      }
      if (arrayOfOperations[i] === "+")
        sum += parseInt(arrayOfOperations[i + 1]);
      else if (arrayOfOperations[i] === "-")
        sum -= parseInt(arrayOfOperations[i + 1]);
      else if (arrayOfOperations[i] === "/")
        sum /= parseInt(arrayOfOperations[i + 1]);
      else if (arrayOfOperations[i] === "*")
        sum *= parseInt(arrayOfOperations[i + 1]);
      i++;
    }

    setInput("");
    setResult(sum.toString());
  };

  return (
    <div className="calculator">
      <div className="calculator__wrapper">
        <form
          action=""
          className="calculator__form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="text" value={input} placeholder={result} />
          <div className="calculator__operations">
            <button onClick={(e) => stringInput("0", e)}>0</button>
            <button onClick={(e) => stringInput("1", e)}>1</button>
            <button onClick={(e) => stringInput("C", e)}>C</button>
            <button>=</button>
            <button onClick={(e) => stringInput("+", e)}>+</button>
            <button onClick={(e) => stringInput("-", e)}>-</button>
            <button onClick={(e) => stringInput("*", e)}>*</button>
            <button onClick={(e) => stringInput("/", e)}>/</button>
          </div>
        </form>
      </div>
    </div>
  );
};
