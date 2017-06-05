import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentForm from './components/CommentForm'
import CommentList from './components/CommentList'
import CommentStore from './store/CommentStore'
import AppDispatch from './dispatcher/index'

import registerServiceWorker from './registerServiceWorker';
import './index.css';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state={
			comment: CommentStore.getComment()
		}
		this.onhandleChange = this.onhandleChange.bind(this);
	}

	onhandleChange() {
		this.setState({
			comment: CommentStore.getComment()
		})
	}

	componentDidMount() {
		CommentStore.addChangeListener(this.onhandleChange)
	}

	componentWillUnmount() {
		CommentStore.removeChangeListener(this.onhandleChange)
	}

	render() {
		return(
           <div className='container'>
		       <CommentForm />
		       <CommentList comment={this.state.comment}/>
		    </div>
		)		
	}
}


ReactDOM.render(<CommentBox />, document.getElementById('root'));
registerServiceWorker();
