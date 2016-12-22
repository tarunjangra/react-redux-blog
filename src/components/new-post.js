import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

const FIELDS = {
    title: {
        type: 'input',
        label: 'Title',
        info: 'Title is mandatory'
    },
    categories: {
        type: 'input',
        label: 'Categoreis',
        info: 'Categories are mandatory'
    },
    content: {
        type: 'textarea',
        label: 'Content',
        info: 'Content is mandatory'
    }
};

class NewPost extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props)
        .then(() => {
            //blogpost has been created. navigate the user to the index.
            this.context.router.push('/');
        });
    }

    renderFields(fieldConfig,field){

        const fieldHelper = this.props.fields[field]

        return (
            <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid?'has-danger':''}`} key={field}>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
            <div className="text-help">
                {fieldHelper.touched?fieldHelper.error:''}
            </div>
        </div>
        );
    }

    render(){
        const {handleSubmit} = this.props;
        //const handleSubmit = this.props.handleSubmit;
        // const fields.title = this.props.fields.title

        return <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create new post</h3>
        { _.map(FIELDS, this.renderFields.bind(this))}
        <button type="submit" name="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    }
}

function validate(values) {
    const errors = [];
    _.forEach(FIELDS, function(field, key){
        if(!values[key]) {
            errors[key] = field.info;
        }
    });

    return errors;
}
//connect 1st argument is mapStateToProps and 2nd argument is mapDispatchToProps.
//reduxForm 1st is form config, 2nd is mapStateToProps and 3rd mapDispatchToProps

export default reduxForm({
    form: 'postNewForm',
    fields: _.keys(FIELDS),
    validate
},null, { createPost })(NewPost);