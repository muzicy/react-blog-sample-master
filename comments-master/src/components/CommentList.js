import React, {Component} from 'react'
import CommentActions from '../actions/index'

class CommentList extends Component {
	componentWillMount() {
        CommentActions.loadComments();
	}
	render() {
		const {comment} = this.props;
		return (
           <ul className='comment-list'>
               {
               	  comment.map((c, index) => (
               	  	  <li key={`key-${index}`}> <span>{c.name}</span>
               	  	  说：<span> {c.text} </span> </li>
               	  ))
               }
           </ul>
		)
	}
}

export default CommentList