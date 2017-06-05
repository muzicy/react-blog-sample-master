import React, {Component } from 'react'
import Nav from '../components/navigator'
import Article from './article'

class ArticlePage extends Component {
	render() {
		const {article} = this.props;
		return (
            <div className='article-page'>
	            <Nav />
	             <Article article={article} />
			</div>
		)
		
	}
}

export default ArticlePage