import _ from 'lodash';
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class ToDo extends Component {
    
    constructor(props) {
        super(props)
        this.state = {items: []};
        this.renderList = this.renderList.bind(this);
  }

    onAddList() {
        this.setState({
            items: this.state.items.concat([_.now()])
        });
    }

    renderList(){
        return this.state.items.map((value) => {
            return <li className="list-group-item" key={value}>
                {value}<button className="btn pull-right btn-danger no-padding" onClick={this.removeList.bind(this)}>Remove</button>
            </li>
         });
    }
    removeList(){
        var item = this.state.items;
        item.splice(-1);
        this.setState({
            items: item
        });
    }
    render(){
            var self = this;
        return (
            <div>
            <br />
            <div className="btn-group pull-right" role="group">
                <button className="btn btn-default btn-warning" onClick={this.onAddList.bind(this)}>Add List</button>
                <button className="btn btn-default btn-warning">Index</button>
            </div>
            <br /><br />
            <ul className="list-group">
            {this.renderList()}
            </ul>
            </div>
        );
    }
}