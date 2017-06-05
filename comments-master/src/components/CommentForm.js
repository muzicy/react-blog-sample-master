import React, {Component} from 'react'
import Actions from '../actions/index'

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAddComment = this.handleAddComment.bind(this);
		this.state = {
			value: ''
		}
	}

	handleSubmit(e) {
        this.setState({
        	value: e.target.value
        })
	}

	handleAddComment() {
        Actions.addComment(this.state.value);
	}
	render() {
		return (
            <div class='comment-form'>
                <textarea placeholder='请输入评论' onChange={this.handleSubmit}></textarea>
                <button onClick={this.handleAddComment}>评论</button>
            </div>
           
		)
	}
}

export default CommentForm