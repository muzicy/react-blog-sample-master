import * as Actions from '../actions/articles'
import * as ActionConstant from '../components/constants/constant'
import {combineReducers} from 'redux'


function articles(state={
	isFetching: false,
	items: [],
	isError: false
}, actions) {
	console.log(actions);
	switch(actions.type) {
		case ActionConstant.LOAD_ARTICLES: 
		     return Object.assign({}, state, {
		     	isFetching: true
		     });
		case ActionConstant.RECEIVE_ARTICLES_SUCCESS: 
		     return Object.assign({}, state, {
		     	items: actions.articles 
		     });
		case ActionConstant.RECEIVE_ARTICLES_FAIL: 
		     return Object.assign({}, state, {
                 isError: true
		     })

		default: 
		     return state;
	}
}


export default combineReducers({articles})
