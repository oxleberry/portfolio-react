
import React, { Component } from 'react';

class ProjectList extends Component {
  render() {
    return (
      <section className="projects">
         <h2>{this.props.project.title}</h2>
         <div className="project-container">
            <div className="project-visual">
               <div className="project-img">
                  <img src={this.props.project.image} alt={this.props.image} />
               </div>
            </div>
            <div className="project-details">
               <div className="detail-container">
                  <p>{this.props.project.description}</p>
                  <a href={this.props.project.projectLink}>{this.props.project.title}</a>
                  <a href={this.props.project.gitHubLink}><button>See the Code</button></a>
                  <ul>
                      <li>Pair Programming</li>
                      <li>Express</li>
                      <li>MongoDB / Mongoose</li>
                      <li>AJAX/ JSON</li>
                  </ul>
              </div>
            </div>
         </div>



      </section>
    );
  }
}

export default ProjectList;
