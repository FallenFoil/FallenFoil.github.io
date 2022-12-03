import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio'; 

class Main extends Component {
  render() {
    return (
      <div>
        <Header data={this.props.data.main}/>
        <About data={this.props.data.main}/>
        <Resume data={this.props.data.resume}/>
        <Portfolio data={this.props.data.portfolio}/>
        <Footer data={this.props.data.main}/>
      </div>
    );
  }
}

export default Main;
