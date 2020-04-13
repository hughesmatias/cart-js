import React, { Component } from 'react'
import Layout from '../components/Layout';
import styled from 'styled-components';

const Form = styled.div`
  width: 40%;
  margin: auto;
  padding: 10vh;
  border: 1px solid grey;

  div {
    display: block;
    width: 100%;
    height: 30px;
    label {
      display: inline-block;
      width: 50%;
    }
  }
`

export default class Login extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Form>
            <div>
              <label htmlFor="">User</label><input type="text" name="user"/>
            </div>
            <div>
              <label htmlFor="">Password</label><input type="password" name="pass"/>
            </div>
            <button type="submit">Login</button>
          </Form>
        </Layout>
      </div>
    )
  }
}
