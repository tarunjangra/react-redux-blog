import _ from 'lodash';
import React,{Component} from 'react';
import Faker from 'faker';
import ReactCSSTrasitionGroup from 'react-addons-css-transition-group';

export default class ToDo extends Component {
    
    constructor(props) {
        super(props)
        this.state = {quotes: []};
  }

    onAddList() {
        const quote = Faker.lorem.sentence();
        this.setState({quotes: [...this.state.quotes, quote]});
    }

    renderList(){
        return this.state.quotes.map((item, index) => {
            return <li className="list-group-item" key={index}>
                {item}<button className="btn pull-right btn-danger no-padding" onClick={this.removeList.bind(this,item)}>Remove</button>
            </li>
         });
    }
    removeList(quote){
        this.setState({quotes: _.without(this.state.quotes, quote)});
    }
    render(){
        const transitionOptions = {
            transitionName: "fade",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
        }
        return (
            <div>
            <button className="btn btn-default btn-warning" onClick={this.onAddList.bind(this)}>Add List</button>
            <ul className="list-group">
            <ReactCSSTrasitionGroup {...transitionOptions}>
            {this.renderList()}
            </ReactCSSTrasitionGroup>
            </ul>
            </div>
        );
    }
}