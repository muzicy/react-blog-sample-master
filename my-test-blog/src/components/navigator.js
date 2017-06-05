import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {browserHistroy as Router, Route, Link} from 'react-router-dom'
import './navigator.css'

class NavItem extends Component {
    
    render () {
    	console.log(this.props.item);
    	const  item  = this.props.item;
    	return (
            <li><Link to={item.href} >{item.text}</Link></li>
    	)
    }
}

class Nav extends Component {

	render() {
		const list = [{text: '主页', href: '/'}, {text: '文章', href: '/article'}];

		return (
            <ul className='navigator'>
                {
                	list.map((item, index) => (
                		//console.log(item)
                		<NavItem key={index} item={item} />
                	))
                }
            </ul>
		)
	}
}

export default Nav