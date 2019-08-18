import React, { Component } from 'react';
import Link from 'next/link';

class Nav extends Component {
  render() {
    return (
      <div>
        <Link href="/sell">
          <a>Sell!</a>
        </Link>
        <Link href="/">
          <a>Home!</a>
        </Link>
      </div>
      
    );
  }
}

export default Nav;