import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        ref={ref}
        type={props.type}
        id={props.id}
        min={props.min}
        max={props.max}
        step={props.step}
        defaultValue={props.defaultValue}
      />
    </div>
  );
});

export default Input;
