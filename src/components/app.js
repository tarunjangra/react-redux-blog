import React, { Component } from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>

          <div className="btn-group pull-right" role="group">
            <Link to="/" className="btn btn-default">Posts</Link>
            <Link to="/photos" className="btn btn-default">Photos</Link>
            <Link to="/todo" className="btn btn-default">ToDo List</Link>
            <Link to="/map" className="btn btn-default">Google Map</Link>
          </div>
        {this.props.children}
      </div>
    );
  }
}
