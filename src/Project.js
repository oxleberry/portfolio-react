
import React, { Component } from 'react';

class ProjectList extends Component {
  render() {
    return (


      <section className="borderLeft color-border">
         <div className="projDetails borderTop">
            <div className="flex-wrap">
               <div className="col-container-left">
                  <p className="projHeadline color-text">{this.props.project.title}</p>
               </div>
               <div className="col-container-right">
                  <p className="ltBrown">
                     <a href={this.props.project.gitHubLink}>
                        <button className="btn-github color-outline">Github Code</button>
                     </a>
                  </p>
               </div>
            </div>
            <div className="flex-wrap">
               <div className="col-container-left">
                  <a href={this.props.project.projectLink}>
                     <img src={this.props.project.image} alt={this.props.image} />
                  </a>
               </div>
               <div className="col-container-right">
                  <ul>
                     <li className="ltBrown"> TECHNOLOGIES USED:</li>
                     <li className="techUsed"> {this.props.project.skills[0]}</li>
                     <li className="techUsed"> {this.props.project.skills[1]}</li>
                     <li className="techUsed"> {this.props.project.skills[2]}</li>
                  </ul>
                  <p className="projText">{this.props.project.description}</p>
               </div>
            </div>
         </div>
         <hr />
      </section>



    );
  }
}

export default ProjectList;
