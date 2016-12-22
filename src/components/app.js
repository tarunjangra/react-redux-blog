import React, { Component } from 'react';

export default class App extends Component {
  render() {
    console.log(window);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
