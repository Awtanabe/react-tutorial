import React from 'react';
import '../App.css';
import { Container,Row, Col } from 'react-bootstrap';
import Input from 'react-validation/build/input';


class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',email:'' ,image: '',fruites: '',
      message: {
        name: '',
        email: '',
        fruites: ''
      }
      
    }
  }

  
  handleChange(e){

    const name = e.target.name
    let val = e.target.value
    
   

    if (name == "image"){
      val = URL.createObjectURL( e.target.files[0])
    }
    this.setState({[name]: val})

  }

  handleSubmit(e){
    const result = validateInput(e)
    debugger
    alert("a name was submited" + this.state.value)
    e.preventDefault()
  }

  render () {
    return (
      <div className="App" >
        <form onSubmit={(e)=> this.handleSubmit(e)}>
          <label>
            Name:
             <input name="name" type="text" onChange={(e)=> this.handleChange(e)}/>
             {this.state.message.name}
          </label>
          <label>
            Email:
             <input name="email" type="text" onChange={(e)=> this.handleChange(e)}/>
          </label>
          <label>
            <input type="file" name="image"  onChange={(e)=> this.handleChange(e)}/>
          </label>
          <img src={this.state.image}  alt="アイコン" />
          <label>
            Name:
            <select name="fruites" onChange={(e) => this.handleChange(e)}>
              <option value="grape">grape</option>
              <option value="banana">banana</option>
              <option value="orange">orange</option>
            </select>
          </label>
          <br/>
          <input type="submit" name="name"/>
        </form>  
      </div>
    );
  }
}

export default Test;


function nameValidate(name){
  if(!name) return {name: 'nameが入力されていません'}
  return {name: ''};
}

function emailValidate(email){
  if(!email) return {email: 'emailが入力されていません'}
  return {email: ''};
}


function validateInput(e){
  const name = e.target[0].name
  
 const val = {message: {name:"",email:""} }
  switch(name){
    case 'name':
     nameValidate(e.target[0].value)
  }
  return val
}


// class Test extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value:'sssss'
//     }

//   }

//   handleChange(e){
//     this.setState({value: e.trgate.value})
//   }


//   render () {
//     return (
//       <div className="App" >
//         <form>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)}/>
//             {/* <textarea value={this.state.value} onChange={(e)=>this.handleChange(e)}></textarea> */}
//           </label>
//           <br/>
//           <input type="submit" name="name"/>
//         </form>
        
//       </div>
//     );
//   }
// }

// export default Test;
