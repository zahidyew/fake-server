import express, {Request, Response} from 'express'
import fetch from 'node-fetch'

export const usersRouter = express.Router()

// get all users
usersRouter.get('/', (_req: Request, res: Response) => {
   const url: string = 'https://jsonplaceholder.typicode.com/users'

   fetch(url)
      .then(response => response.json())
      .then(data => res.json(data))
      .catch((error) => console.log(error))
})

// get a user with a specific id
usersRouter.get('/:id', (req: Request, res: Response) => {
   const url: string = 'https://jsonplaceholder.typicode.com/users/' + req.params.id

   fetch(url)
      .then(response => response.json())
      .then(data => res.json(data))
      .catch((error) => console.log(error))
})

// create new user
usersRouter.post('/', (req: Request, res: Response) => {
   const url: string = 'https://jsonplaceholder.typicode.com/users' 

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
usersRouter.patch('/:id', (req: Request, res: Response) => {
   const url: string = 'https://jsonplaceholder.typicode.com/users/' + req.params.id 

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
usersRouter.delete('/:id', (req: Request, res: Response) => {
   const url: string = 'https://jsonplaceholder.typicode.com/users/' + req.params.id 

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
usersRouter.get('/:id/albums', (req: Request, res: Response) => {
   let query: string = ""

   // check if client include query to filter result
   if(req.query.title !== undefined) { query = query + "&title=" + req.query.title }

   const url: string = 'https://jsonplaceholder.typicode.com/users/' + req.params.id + '/albums?' + query

   fetch(url)
      .then(response => response.json())
      .then(data => res.json(data))
      .catch((error) => console.log(error))
})