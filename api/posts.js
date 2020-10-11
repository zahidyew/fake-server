const router = require('express').Router();
const fetch = require('node-fetch');

// get all posts
router.get('/', (req, res) => {
   const url = 'https://jsonplaceholder.typicode.com/posts'

   fetch(url)
      .then(response => response.json())
      .then(data => res.json(data))
      .catch((error) => console.log(error))
})

// get a post with a specific id
router.get('/:id', (req, res) => {
   const url = 'https://jsonplaceholder.typicode.com/posts/' + req.params.id

   fetch(url)
      .then(response => response.json())
      .then(data => res.json(data))
      .catch((error) => console.log(error))
})

module.exports = router