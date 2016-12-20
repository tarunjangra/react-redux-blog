import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

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

    render(){
        const {fields:{title,categories,content},handleSubmit} = this.props;
        //const handleSubmit = this.props.handleSubmit;
        // const fields.title = this.props.fields.title

        return <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create new post</h3>
        <div className={`form-group ${title.touched && title.invalid?'has-danger':''}`}>
        <label>Name:</label>
        <input type="text" className="form-control" {...title} />
            <div className="text-help">
                {title.touched?title.error:''}
            </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid?'has-danger':''}`}>
        <label> Categories:</label>
        <input type="text" className="form-control"  {...categories} />
            <div className="text-help">
                {categories.touched?categories.error:''}
            </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid?'has-danger':''}`}>
        <label>Contents:</label>
        <textarea className="form-control" {...content} ></textarea>
            <div className="text-help">
                {content.touched?content.error:''}
            </div>
        </div>
        <button type="submit" name="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = "Enter a username";
    }

    if(!values.categories) {
        errors.categories = "Enter categories";
    }

    if(!values.content) {
        errors.content = "Enter content";
    }

    return errors;
}
//connect 1st argument is mapStateToProps and 2nd argument is mapDispatchToProps.
//reduxForm 1st is form config, 2nd is mapStateToProps and 3rd mapDispatchToProps

export default reduxForm({
    form: 'postNewForm',
    fields: ['title', 'categories', 'content'],
    validate
},null, { createPost })(NewPost);