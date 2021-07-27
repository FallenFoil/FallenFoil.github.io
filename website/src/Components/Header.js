import React, { Component } from 'react'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'

class Header extends Component {
   constructor(props){
      super(props);
      this.state = {
         is_preloaded: true,
         first_render: true
      };
   }
   componentDidMount(){
      this.state.is_preloaded = false;
   }

   render() {
      if(this.props.data){
         var name = this.props.data.name;
         var descriptions = this.props.data.description;

         var delay = false;
         if(this.state.first_render){
            this.state.first_render = false;
            this.setState({...this.state});
            delay = true;
         }
         
         var type_descriptions = <TypistLoop interval={100}>
                                 {descriptions.map((text, i) => 
                                    <Typist className="typist" key={text} startDelay={500}>
                                       {delay && i===0 && <Typist.Delay ms={1439}/>}
                                       {text}
                                       <Typist.Backspace count={text.length} delay={1000}/>
                                    </Typist>
                                 )}
                              </TypistLoop>

         var networks= this.props.data.social.map(function(network){
            return <li key={network.name}><a href={network.url} target="_blank" rel="noreferrer"><i className={network.className}></i></a></li>
         })
      }

      var stars = [];
      for(var i=1; i<10; i++){
         stars.push(<span className={"light x"+i}></span>)
      }

      return (
         <header id="home" className={this.state.is_preloaded ? 'is-preload' : ''}>
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a id="about_btn" className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline name-animation">{name}</h1>
                  <div className="description-animation">{type_descriptions}</div>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
  }
}

export default Header;
