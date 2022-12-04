import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Fibo from './Components/Fibo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData(){    
    fetch('/resumeData.json')
      .then(res => res.json())
      .then((result) => {
          this.setState({resumeData: result});
        },
        (error) => {
          alert('Could get some data')
        }
      )
  }

  componentDidMount(){
    this.getResumeData();
  }

  render(){
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Footer data={this.state.resumeData.main}/>
        <Fibo />
      </div>
    );
  }
}

export default App;
