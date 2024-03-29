import React, { Component } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects, i){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              {
                projects.video ? 
                  (projects.no_hover ? 
                    <video className="project-video" autoPlay loop muted>
                      <source src={projectImage} type="video/mp4"/>
                    </video> :
                    <HoverVideoPlayer videoSrc={projectImage} hoverTarget={() => document.getElementById("overlay-" + i)}/>
                  ) :
                  <img alt={projects.title} src={projectImage} />
              }
              <div className="overlay" id={"overlay-" + i}>
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
