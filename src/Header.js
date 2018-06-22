
import React, { Component } from 'react';
import Nav from './Nav.js';

class Header extends Component {
  render() {
    return (
      <header>
         <div id="home">
            <Nav />
            <div className="bg-box">
               <div className="background"></div>
               <div className="midground"></div>
               <div className="foreground"></div>
            </div>
         </div>
      </header>
    );
  }
}




export default Header;
