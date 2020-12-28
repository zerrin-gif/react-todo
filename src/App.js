import React from 'react'
import Button from './Button';
​
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'rgb(0,0,0)'
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  }
​
  randomColor() {
    return Math.floor(Math.random() * 256);
  }
  
  buttonClicked() {
    const redColor = this.randomColor();
    const greenColor = this.randomColor();
    const blueColor = this.randomColor();
    const rgbCode = `rgb(${redColor},${greenColor},${blueColor})`;
    // REAL DOM:
    // document.getElementById('header').style.color = rgbCode;
    // document.getElementById('header').innerText = rgbCode;
​
    // Virtual DOM:
    this.setState({color: rgbCode});
  }
​
  render(){
    return (
      <div>
        <h1 id="header" style={{color: this.state.color}}>{this.state.color}</h1>
        <Button title="Click me!" onClick={this.buttonClicked}/>
      </div>
    );
  } 
}
​
export default App;
