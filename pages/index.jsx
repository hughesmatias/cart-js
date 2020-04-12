import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Link href="/product?name=vaso">
          <a>Product 1</a>
          </Link>
          <Link href="/products/[name]" as={`/products/Product 2`}>
            <a>Product 2</a>
          </Link>
        </Layout>
      </div>
    )
  }
}
