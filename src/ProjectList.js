
import React, { Component } from 'react';
import Project from './Project.js'


class ProjectList extends Component {
  render() {

     const projectList = [
      {
         title: `Shop.ly`,
         description: `Built a database for a shopping cart site in a 1 week sprint. App stores the inventory of each design by size. When user adds item to shopping cart, the database will decrement that size from the database. If the user decides remove that item before checkout, that database will restock that item's inventory back into the database.`,
         image: `images/proj4_caro.png`,
         projectLink: `https://shirt-ly.herokuapp.com/`,
         gitHubLink: `https://github.com/oxleberry/Shop.ly`
         skills: ['Pair Programming',]
      },
      {
         title: 'test two',
         description: `Lorem ipsum TWO`,
         image: `images/proj3_caro.png`,
         projectLink: `https://shirt-ly.herokuapp.com/`,
         gitHubLink: `https://github.com/oxleberry/Shop.ly`

      }
    ];

    const renderedProjectList = projectList.map((project, idx) => {
      return <Project project={project} key={idx}/>;
    });

    return (
      <div>
         {renderedProjectList}
      </div>
    );
  }
}




export default ProjectList;
