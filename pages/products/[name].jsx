import React, { Component } from 'react'
import { useRouter } from 'next/router';

const product = (props) => {
  const router = useRouter();
  return (
    <div>
      this product {router.query.name}
    </div>
  )
}

export default product;
