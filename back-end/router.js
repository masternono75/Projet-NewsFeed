const express = require('express')
const axios = require('axios')
const router = express.Router()

router.route('/').get(function(request, response) {
    response.send('Hello World')
})

router.route('/news').get(function(request, response) {
    response.send('Hd')
})

router.route('/comments').get((request, response) => {
  var request = axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f67d4d9879bd486a84fafe2e6a0b5dce')
        .then((httpResponse) => response.send(httpResponse.data))
})

module.exports = router
