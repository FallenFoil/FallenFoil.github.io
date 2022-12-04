import React, { Component } from 'react';
import calculate from '../fibo'

const MAX_RAND = 1001

class Fibo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      size: 0,
      result: 0,
      random: Math.floor(Math.random() * MAX_RAND)
    };
    this.changeStart = this.changeStart.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newNumber = this.newNumber.bind(this);
    this.useNumber = this.useNumber.bind(this);
  }

  changeStart(event) {
    this.setState({start: event.target.value});
  }

  changeSize(event) {
    this.setState({size: event.target.value});
  }

  handleSubmit(event) {
    const result = calculate(this.state.start, this.state.size)
    this.setState({result: result});
    event.preventDefault();
  }

  newNumber(){
    this.setState({random: Math.floor(Math.random() * MAX_RAND)});
  }

  useNumber(){
    this.setState({start: this.state.random});
  }

  render() {
    return (
      <div
        id="fibo"
        style={{
          "display": "none",
          "margin": "auto",
          "marginTop": "10%",
          "display": "flex",
          "width": "30%",
          "flexDirection": "column"
        }}
      >
        <div style={{"color": "white"}}>
          <p>Random Number: <span style={{"fontWeight": "bold", "fontSize": "1.5em"}}>{this.state.random}</span></p>
          <button onClick={this.newNumber}>New Number</button>
          <button onClick={this.useNumber} style={{"marginLeft": "1em"}}>Use Number</button>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label style={{"color": "white"}}>
              Start:
              <input style={{"width":"30%", "marginLeft": "1em"}} type="number" value={this.state.start} onChange={this.changeStart}/>
            </label>
            <label style={{"color": "white"}}>
              Size:
              <input style={{"width":"30%", "marginLeft": "1.6em"}} type="number" value={this.state.size} onChange={this.changeSize}/>
            </label>
            <input style={{"width":"100%", "height": "30%"}} type="submit" value="Submit"/>
            <p style={{"color": "white"}}>Result: <span style={{"fontWeight": "bold", "fontSize": "2em"}}>{this.state.result}</span></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Fibo;
