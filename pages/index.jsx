import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Header';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Link href="/product">
        <a>Product 1</a>
        </Link>
        <Link href="/product">
          <a>Product 2</a>
        </Link>
      </div>
    )
  }
}
