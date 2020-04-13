import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Product = styled.div`
  width: 250px;
  border: 1px solid lightgrey;
  padding: 5px;
  margin: 15px;
  display: inline-block;
`;

export default class Index extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Product>
            <Link href="/product?name=vaso">
            <a>Product 1</a>
            </Link>
          </Product>

          <Product>
            <Link href="/products/[name]" as={`/products/Product 2`}>
              <a>Product 2</a>
            </Link>
          </Product>
        </Layout>
      </div>
    )
  }
}
