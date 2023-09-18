import React, { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Input
        ref={amountInputRef}
        type="number"
        id={props.id}
        name="Quantity"
        min={1}
        max={5}
        step={1}
        defaultValue={1}
      />
      <button type="submit">Add to Cart</button>
      {!amountIsValid && <p>Plase enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;
