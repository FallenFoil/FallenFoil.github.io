import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bios = this.props.data.bio.map(function(bio){
         if(bio.includes("{age}")){
            var current_date = new Date();
            var age = current_date.getFullYear() - 1998;

            if(current_date.getMonth() <= 1 && current_date.getDate() < 10){
               age--;
            }

            return <p className="bio">{bio.replace("{age}", age)}</p>
         }
         return <p className="bio">{bio}</p>
      })
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={profilepic} alt="Luis Macedo Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               {bios}
               <div className="row">
                  <div className="columns download">
                     <p>
                        <a href={resumeDownload} rel="noreferrer" className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <button style={{"position": "absolute", "color": "#2C2C2C", "background": "#2C2C2C"}}>Fibonacci</button>
      </section>
    );
  }
}

export default About;
