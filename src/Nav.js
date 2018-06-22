
import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (
      <nav className="sticky-header flex-mobile">
          <div className="nav-logo">
              <a className="nav-left" href="#">Sharon Paz</a>
              <a className="nav-right hamburger hide"><i className="fas fa-bars"></i></a>
          </div>
          <a className="nav-collapse opacity" href="#">.</a>
          <a className="nav-collapse active" href="#home">home</a>
          <a className="nav-collapse" href="#about">about</a>
          <a className="nav-collapse" href="#top-of-projects">projects</a>
          <a className="nav-collapse" href="#contact">contact</a>
      </nav>
    );
  }
}




export default Nav;
