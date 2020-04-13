import React, { Component } from 'react'
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export const ProductContainer = styled.div`
  border: 1px solid black;
  width: 90%;
  height: 60vh;
  margin: auto;
  display: flex;

  div {
    width: 50%;
  }

  img {
    width: 50%;
  }
`;

const product = props => {
  const router = useRouter()

  return  (
    <div>
      <Layout>
        <ProductContainer>
          <div>
            <h3>Product name: {router.query.name}</h3>
            <h4>price: $123123</h4>
            <p>
              details: ...
            </p>
          </div>
          <img src={`/img/products/${router.query.name}.jpg`} />
          
        </ProductContainer>
      </Layout>
    </div>
  )
}

export default product;
