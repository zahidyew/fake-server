const router = require('express').Router();
const fetch = require('node-fetch');

// get all users
router.get('/', (req, res) => {
   const url = 'https://jsonplaceholder.typicode.com/users'

   fetch(url)
      .then(response => response.json())
      .then(data => res.json(data))
      .catch((error) => console.log(error))
})

// get a user with a specific id
router.get('/:id', (req, res) => {
   const url = 'https://jsonplaceholder.typicode.com/users/' + req.params.id

   fetch(url)
      .then(response => response.json())
      .then(data => res.json(data))
      .catch((error) => console.log(error))
})

// create new user
router.post('/', (req, res) => {
   const url = 'https://jsonplaceholder.typicode.com/users' 

   if(Object.keys(req.body).length === 0) {
      res.json("Form data is undefined")
   } else {
      fetch(url, {
         method: 'POST',
         body: JSON.stringify({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then(response => response.json())
         .then(data => {
            res.json("Success")
            console.log(data)
         })
         .catch((error) => console.log(error))
   }
})

// update user's info
router.patch('/:id', (req, res) => {
   const url = 'https://jsonplaceholder.typicode.com/users/' + req.params.id 

   if (Object.keys(req.body).length === 0) {
      res.json("Form data is undefined")
   } else {
      fetch(url, {
         method: 'PATCH',
         body: JSON.stringify({
            name: req.body.name,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         },
      })
         .then(response => response.json())
         .then(data => {
            res.json('Success')
            console.log(data)
         })
         .catch(error => console.log(error))
   }
})

// delete user
router.delete('/:id', (req, res) => {
   const url = 'https://jsonplaceholder.typicode.com/users/' + req.params.id 

   fetch(url, {
      method: 'DELETE',
   })
      .then(response => response.json())
      .then(data => {
         res.json("Success")
         console.log(data)
      })
      .catch(error => console.log(error))
})

// get user albums
router.get('/:id/albums', (req, res) => {
   let query = ""

   // check if client include query to filter result
   if(req.query.title !== undefined) { query = query + "&title=" + req.query.title }

   const url = 'https://jsonplaceholder.typicode.com/users/' + req.params.id + '/albums?' + query

   fetch(url)
      .then(response => response.json())
      .then(data => res.json(data))
      .catch((error) => console.log(error))
})

module.exports = router