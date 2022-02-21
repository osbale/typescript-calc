import React, { useState } from "react";
import styles from "./Calculator.module.css";

const operations = ["+", "-", "*", "/"];

export const Calculator = () => {
  const [inp, setInp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    operations.forEach((op) => {
      if (inp.indexOf(op) !== -1) {
        const numbers = inp.split(op);
        const x = parseInt(numbers[0], 2);
        const y = parseInt(numbers[1], 2);
        const sum = x + y;
        setInp(sum.toString(2));
      }
    });
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    setInp((inp) => (inp += value));
  };

  const clear = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setInp("");
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__wrapper}>
        <form className={styles.calculator__form} onSubmit={handleSubmit}>
          <input readOnly type="text" value={inp} placeholder="binary" />
          <div className={styles.calculator__operations}>
            <button value={0} onClick={onClick}>
              0
            </button>
            <button value={1} onClick={onClick}>
              1
            </button>
            <button onClick={clear}>C</button>
            <button type="submit">=</button>
            {operations.map((op) => (
              <button key={op} value={op} onClick={onClick}>
                {op}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};
