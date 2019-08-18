import React, { Component } from 'react';

import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="bar">
          <a href="">Sick Fits</a>
          <div>
            <Nav />
          </div>
        </div>
        <div className="sub-bar">
          <p>Search</p>
        </div>
        <div>
          Cart
        </div>
      </div>
    );
  }
}

export default Header;