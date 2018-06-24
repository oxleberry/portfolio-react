
import React, { Component } from 'react';
import './css/style.css';
import './css/portfolio.css';

import Nav from './Nav.js';
import Header from './Header.js';
import ProjectList from './ProjectList.js';
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
      <div>
         <Nav />
         <div class="container websiteST">
            <Header />
            <ProjectList />
            <Footer />                
         </div>
      </div>
    );
  }
}

export default App;
