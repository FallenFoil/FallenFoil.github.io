import React, { Component } from 'react';
import Marquee from "react-fast-marquee";

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage.map(function(msg){
         return <p>{msg}</p>
      })
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        var descriptions = work.description.map(function(description){
          return <p>{description}</p>
        })

        return <div><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            {descriptions}
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        /*var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>*/
        var skillImage = 'images/skills/' + skills.image;
        return <img alt={skills.image} className="marquee-img" src={skillImage}/>
      })
      var online = this.props.data.online.map(function(courses){
         var descriptions = courses.description.map(function(description){
            return <p>{description}</p>
         })
         return <div key={courses.school}><h3>{courses.school}</h3>
         <p className="info">{courses.degree} <span>&bull;</span><em className="date">{courses.graduated}</em> <span>&bull;</span><a href={courses.credential} rel="noreferrer" target="_blank">Credential</a></p>
         {descriptions}</div>
      })
    }

    return (
      <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Online Courses</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {online}
               </div>
            </div>
         </div>
      </div>

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            {skillmessage}

				<div className="bars">
               <Marquee className="marquee" pauseOnClick="true" speed="30">
                  {skills}
               </Marquee>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
