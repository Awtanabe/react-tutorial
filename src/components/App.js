import React from 'react';
import '../App.css'
import { Container,Row, Col } from 'react-bootstrap';


class App extends React.Component {
  render () {
    return (
      <div className="App">
       <div className="container">
         <div className="col text-center">1</div>
         <div className="col text-center">2</div>
         <div className="col text-center">3</div>
       </div>
      </div>
    );
  }
}

export default App;
