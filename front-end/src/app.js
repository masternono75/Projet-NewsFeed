import {messages} from "./messages"
import axios from 'axios'



var news = axios.get('http://127.0.0.1:8080/comments')
    .then((response) => {
        console.log(response);
    })



console.log(('App.js Loaded'))
console.log(messages)