import * as ArticleOpration from '../components/constants/constant'
import fetch from 'isomorphic-fetch'

let initialArtciles = [];

export function requestArticle() {
	return {
		type: ArticleOpration.LOAD_ARTICLES
	}
}

export function receiveArticles(articles) {	
    return {
    	type: ArticleOpration.RECEIVE_ARTICLES_SUCCESS,
    	articles: articles
    }
}

export function receiveArticlesFail (err) {
    return {
    	type: ArticleOpration.RECEIVE_ARTICLES_FAIL,
    	error: err
    }
}

export function loadAllArticles() {

   return function(dispatch) {
   	  dispatch(requestArticle());
      
     // console.log(fetch('data.json'))     
      return fetch('/data.json').then(function(res) {
        //console.log(res);
       // console.log(res.json());
        return res.json()
      }).then(function(json) {
                	console.log(1);
                	console.log(json);
                  dispatch(receiveArticles(json.articles));
                }).catch(err => dispatch(receiveArticlesFail(err)))             ;

   }
}