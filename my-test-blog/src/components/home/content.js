import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {browserHistroy as Router, Route, Link} from 'react-router-dom'

class ArticleItem extends Component { 

    render() {
    	const {item} = this.props;

    	return (
            <article> 
               <h2><Link to={`/detail/${item.id}`}>{item.title}</Link></h2>
               <span>{item.time}</span>
               <p>{item.description}</p>
            </article>
    	)
    }
}

class Content extends Component {
	render() {
		const {articles} = this.props;
        console.log(articles);
		return (
            <div className='article-content'>
                 {articles.map((article, index) => (
                 	<ArticleItem key={'article-${index}'} item={article} />
                 ))}
            </div>
		)
	}
}

export default Content
