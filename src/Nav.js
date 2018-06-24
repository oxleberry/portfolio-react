
import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (
      <nav className="fixed-top navbar navbar-toggleable-md navbar-inverse brown">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
           <a className="navbar-brand oxle-logo" href="#">Sharon Paz</a>
             <ul className="navbar-nav">
                  <li className="nav-item oxleNav active">
                     <a className="nav-link" href="http://www.oxleberry.com/index.html">Portfolio</a>
                  </li>
                  <li className="nav-item oxleNav">
                     <a className="nav-link" href="http://www.oxleberry.com/about/ap0.html">
                     About</a>
                  </li>
             </ul>
          </div>
          <a className="navbar-brand" href="#">
               <img src="http://www.oxleberry.com/all/mon_all.gif" height="42" />
          </a>
      </nav>
    );
  }
}




export default Nav;
