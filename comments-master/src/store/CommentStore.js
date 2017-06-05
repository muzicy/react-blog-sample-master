import {EventEmitter} from 'events'
import AppDispatcher from '../dispatcher/index'
import * as CommentConstant from '../constants/commentsConstants'

//store里面包含数据的修改逻辑 

let comment = [];

const CommentStore = Object.assign({}, EventEmitter.prototype, {
	getComment() {
		return comment;
	},

	emitChange() {
		this.emit('change');
	},

	addChangeListener(cb) {
		this.on('change', cb);		
	},

	removeChangeListener(cb) {
		this.removeListener(cb);
	}
})

//订阅变化
AppDispatcher.register((action) => {
	console.log(action);
	switch(action.type) {
		case CommentConstant.LOAD_COMMENT_SUCCESS: {
			 comment = action.payload.comment.commentList;
			 CommentStore.emitChange();	
		}
    }		
		   
})

export default CommentStore