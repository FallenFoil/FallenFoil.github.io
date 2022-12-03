import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from './Components/Main';
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
        <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Main data={this.state.resumeData} />} />
            <Route path="fibo" element={<Fibo />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
