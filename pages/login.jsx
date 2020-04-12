import React, { Component } from 'react'
import Layout from '../components/Layout';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Layout>
          <input type="text" name="user"/>
          <input type="password" name="pass"/>
          <button type="submit">Login</button>
        </Layout>
      </div>
    )
  }
}
