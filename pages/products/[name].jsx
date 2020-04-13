import React, { Component } from 'react'
import { useRouter } from 'next/router';
import { ProductContainer } from '../product'

const product = (props) => {
  const router = useRouter();
  return (
    <ProductContainer>
      this product {router.query.name}
    </ProductContainer>
  )
}

export default product;
