import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <input type="text" name="user"/>
        <input type="password" name="pass"/>
        <button type="submit">Login</button>
      </div>
    )
  }
}
