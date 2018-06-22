
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="bg-footer">
              <nav>
                  <a href="https://github.com/oxleberry"><i className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/sharon-paz-oxleberry/"><i className="fab fa-linkedin"></i></a>
                  <a href="https://www.instagram.com/oxleberry/"><i className="fab fa-instagram"></i></a>
              </nav>
              <p><small>&copy;2018 Sharon Paz</small></p>
          </div>
      </footer>
    );
  }
}




export default Footer;
