import {messages} from "./messages"
import axios from 'axios'



var news = axios.get('http://127.0.0.1:8080/comments')
    .then((response) => {
        return response.data.articles
    })

    

news.then(function(result){
	result.forEach(function(article){
	var nono = document.getElementById('nono')
	nono.innerHTML += '<h1>' + article.title + '</h1>'
	})

})




console.log(('App.js Loaded'))
console.log(messages)
console.log(news)