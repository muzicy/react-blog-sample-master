import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {bindActionCreators} from 'redux'
import reducers from '../../reducers/index'
import Nav from '../navigator'
import ArticleSection from './content'
import * as Actions from '../../actions/articles'
/*
const loggerMiddleware = createLogger()

const store = createStore(reducer, applyMiddle(thunkMiddleware,
               loggerMiddleware));
*/
class Home extends Component {
	componentDidMount() {
         const {actions} = this.props;
         actions.loadAllArticles();
	}

	render() {
		
		const {articles, actions} = this.props;
		//console.log(actions)
		//console.log(articles);
		return (
            <div className='home-container'>    
                <Nav />            
                <h1>主页</h1>
                <ArticleSection articles={articles}/>
            </div>
		)
	}
}


const mapStateToProps = (state) => {
    //console.log(state);	
    return {
    	isFetching: state.articles.isFetching,
    	articles: state.articles.items  
    }
}


const mapDispatchToProps = (dispatch) => ({
	actions: {		
		//requestArticles: bindActionCreators(Actions.loadAllArticles, dispatch),
		loadAllArticles: bindActionCreators(Actions.loadAllArticles, dispatch)
	}
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)