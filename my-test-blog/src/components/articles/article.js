import React, {Component} from 'react'

class Arcticle extends Component {
	render() {
		
		const {articles} = this.props;
		console.log(articles)

		return (
            <div className='artcile'>
                <h2>detail</h2>  
                {articles[0].description}
            </div>
		)
	}
}
 
export default Arcticle 