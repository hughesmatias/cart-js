import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const HeaderPage = styled.div`
  background: white;
  color: black;
  height: 100px;
  display: flex;
`;

const Logo = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
`;

const Menu = styled.ul`
  width: 50%;
  margin-left: auto;
  a {
    display: inline-block;
    width: 33%;
    color: darkcyan;
    text-align: right
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderPage>
        <Logo>
          <img src="/img/logo.jpg" />
        </Logo>
        <Menu>
          <Link href="/">
            <a>Shop</a>
          </Link>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </Menu>
      </HeaderPage>
    )
  }
}
