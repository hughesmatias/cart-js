import React, { Component } from 'react'
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const product = props => {
  const router = useRouter()

  return  (
    <div>
      <Layout>
        Product name: {router.query.name}
      </Layout>
    </div>
  )
}

export default product;
