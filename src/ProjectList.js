
import React, { Component } from 'react';
import Project from './Project.js'


class ProjectList extends Component {
  render() {

     const projectList = [
      {
         title: `Stance`,
         description: `Stocks at a Glance, a data visualization app. Stance was a collaborative project made with a team of 3 in a one-week sprint. We used D3.js to create a line graph based on data from IEX's API. Provided wireframes, layout, and about page animation for this project.`,
         image: `images/stance-1.png`,
         projectLink: `http://pure-cliffs-70526.herokuapp.com/`,
         gitHubLink: `https://github.com/kecramer/wdi-stance`,
         skills: ['D3.js', 'SVG', 'Python / Django']
      },
      {
         title: `Shop.ly`,
         description: `Built a database for a shopping cart site in a 1 week sprint at General Assembly. App stores the inventory of each design by size. When user adds item to shopping cart, the database will decrement that size from the database. If the user decides remove that item before checkout, that database will restock that item's inventory back into the database.`,
         image: `images/shoply.png`,
         projectLink: `https://shirt-ly.herokuapp.com/`,
         gitHubLink: `https://github.com/oxleberry/Shop.ly`,
         skills: ['Express', 'MongoDB / Mongoose', 'Node.js']
      },
      {
         title: 'Shopping Cart Challenge',
         description: `In this project, used vanilla javascript to access elements in the DOM. All the items in the shopping stores and shopping carts are dynamically created based on event listeners that when activated, pulls data from a JS object, and returns the corresponding information.`,
         image: `images/proj2_caro.png`,
         projectLink: ``,
         gitHubLink: `https://github.com/oxleberry/oxleberry-webstore/tree/master/my-webstore`,
         skills: ['Vanilla JavaScript', 'DOM manipulation', 'Object Notation']
      }
    ];

    const renderedProjectList = projectList.map((project, idx) => {
      return <Project project={project} key={idx}/>;
    });

    return (
      <main>
         {renderedProjectList}
      </main>
    );
  }
}




export default ProjectList;
