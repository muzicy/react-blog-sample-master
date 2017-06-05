import * as CommentConstant from '../constants/commentsConstants'
import AppDispatch from '../dispatcher/index'
import fetch from 'isomorphic-fetch'

const CommentActions = {
	loadComments () {
		AppDispatch.dispatch({
			type: CommentConstant.LOAD_COMMENT
		})
       
		fetch('/data.json').then(res => {		    	 
			 return res.json()
		}).then(value => {
			console.log(value);
			AppDispatch.dispatch({
				type: CommentConstant.LOAD_COMMENT_SUCCESS,
				payload: {
					comment: value
				}
			})
		}).catch((err) => {
			AppDispatch.dispatch({
				type: CommentConstant.LOAD_COMMENT_FAIL,
				error: err
			})
		})
	},

	addComment(text) {
		AppDispatch.dispatch({
			type: CommentConstant.ADD_COMMENT
		})
        
        //let myHeaders = new Headers();
        //myHeaders.append('Content-Type', 'application/json');
		fetch('../data.json', {
			method: 'POST',
			headers:{  
                    'Content-Type': 'application/json'  
                },  
			body: 'value=' + text,
			//headers: myHeaders
		}).then((res) => {
			return res.json();
		}).then((value) => {
			if(value.ok) {
				AppDispatch.dispatch({
					type: CommentConstant.ADD_COMMENT,
					payload: {
						comment: value
					}
				})
				this.loadComments();
			}

		}).catch((err) => {
			AppDispatch.dispatch({
				type: CommentConstant.LOAD_COMMENT_FAIL,
				error: err
			})
		})
	} 

}

/*export default CommentActions

import compose from 'compose'

export default function applyMiddleware(...middlewares) {
	return (next) => (reducer, initialState) => {
		let store = next(reducer, initialState);
		let dispatch = store.dispatch;
		let chain = [];

		var middlewareAPI = {
			getState: store.getState,
			dispatch: (action) => dispatch(action);
		}

		chain = middlewares.map(middleware => middleware(middlewareAPI);
	    dispatch = compose(...chain)(store.dispatch);

	    return {
	    	...store,
	    	dispatch
	    }
	}
} 

*/