
import React, { Component } from 'react';
import './css/style.css';
import './css/portfolio.css';

import Nav from './Nav.js';
import Header from './Header.js';
import ProjectList from './ProjectList.js';
import Footer from './Footer.js';
import Thanks from './Thanks.js';

class App extends Component {
  render() {
    return (
      <div>
         <Nav />
         <main class="websiteST">
            <Header />
            <ProjectList />
            <Footer />
         </main>
         <Thanks />
      </div>
    );
  }
}

export default App;
