import React from 'react';
import ReactDOM from 'react-dom';
import classes from './input.css'

const input = (props) => {
  let inputElement = null;
  let inputClasses = []

  if (props.invalid && props.shouldValid && props.touched) {
    inputClasses.push('Invalid')
  }  else {
    inputClasses = []
  }
  console.log("css",inputClasses )
  
  switch (props.elmentType) {
    case('input'):
      inputElement = <input onChange={(event) => props.onChange(event,props.formElement.id)} className={inputClasses.join(' ')} elemntConfig={props.elemntConfig} value={props.value}/>;  // ...props にはname placeholderなどが入る
      break;
    case('textarea'):
      inputElement = <textarea onChange={(event) => props.onChange(event,props.formElement.id)} className={classes.InputElement} ></textarea>;
      break;
    case('select'):
      inputElement = <select onChange={(event) => props.onChange(event,props.formElement.id)}
        className={classes.InputElement}
        value={props.value}
        >
        { props.elementConfig.options.map(option => (
           <option value={option.value}>
             {option.displayValue}
           </option>
        ))}
      </select>
      break;
    
    default:
      inputElement = <input className={classes.InputElement} />;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default input;