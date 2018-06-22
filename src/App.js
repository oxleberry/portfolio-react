
import React, { Component } from 'react';
import './css/style.css';

import Header from './Header.js';
import ProjectList from './ProjectList.js';
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
      <div>
         <Header />
         <ProjectList />
         <Footer />
      </div>
    );
  }
}

export default App;
