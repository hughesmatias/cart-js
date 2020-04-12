import React, { Component } from 'react'
import Link from 'next/link';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a>Shop</a>
        </Link>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    )
  }
}
