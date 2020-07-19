import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container,Row, Col } from 'react-bootstrap';
import Input from './components/UI/Input/Input'


class OrderForm extends React.Component {
  state = {
    orderForm: {
      name: {
        elmentType: 'input',
        elemntConfig:{
          type:'text',
          placeholer: 'Your Name'
        },
        value: '',
        validation: {
           required: true,
           minLength: 3,
           maxLength: 5,
        },valid: false,
        touched: false
      },
      email: {
        elmentType: 'input',
        elemntConfig:{
          type:'text',
          placeholer: 'Your Name'
        },
        value: '',
        validation: {
          required: true,
          minLength: 3,
          maxLength: 5,
       },valid: false,
       touched: false
      },
      select: {
        elmentType: 'select',
        elemntConfig:{
          options: [
            {value:"value1", displayValue:"value1"},
            {value:"value2", displayValue:"value2"}
          ]
        },
        value: "value1"
      }
    },formIsValid: false

  }

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {

      isValid = value.length <= rules.maxLength && isValid
    }
    return isValid;
  }

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }
    updatedFormElement.value = event.target.value
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedFormElement.touched = true
    updatedOrderForm[inputIdentifier] = updatedFormElement

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      if (inputIdentifier == 'select') {continue}
      formIsValid = updatedOrderForm[inputIdentifier].valid 
    }
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
  }

  orderHandler = (event) => {
    event.preventDefault()
    const formData = {}
    for( let formElementIdentifer in this.state.orderForm){
      // formdataにオブジェクトを作成
      formData[formElementIdentifer] = this.state.orderForm[formElementIdentifer].value
    }
    console.log("submit",formData)
  }

  render () {
    const formElementsArray = []
    for(let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement =>(
          <Input formElement={formElement} elmentType={formElement.config.elmentType} 
          elementConfig={formElement.config.elemntConfig}
          value={formElement.config.value}
          invalid={!formElement.valid}
          shouldValid={formElement.config.validation}
          touched={formElement.config.touched}
          onChange={this.inputChangeHandler}
          /> 
        ))}
        <input type="submit" value="送信" disabled={!this.state.formIsValid}/>
      </form>
    )

    return(form)
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    return (
      <div className="App">
        <OrderForm/>
      </div>
    );
  }
}

export default App;
