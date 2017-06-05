import React, {Component } from 'react'
import Nav from '../navigator'
import {connect} from 'react-redux'
import ArticleDetail from './article'



class ArticlePage extends Component {
	render() {
		const {articles} = this.props;
		//console.log(this.props.article);
		return (
            <div className='article-page'>
	            <Nav />
	            <ArticleDetail  articles={articles} />
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


export default connect(
    mapStateToProps  
)(ArticlePage)