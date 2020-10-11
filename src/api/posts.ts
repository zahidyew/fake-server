import express, {Request, Response} from 'express'
import fetch from 'node-fetch'

export const postsRouter = express.Router() 

// get all posts
postsRouter.get('/', (req: Request, res: Response) => {
   const url: string = 'https://jsonplaceholder.typicode.com/posts'

   fetch(url)
      .then(response => response.json())
      .then(data => res.json(data))
      .catch((error) => console.log(error))
})

// get a post with a specific id
postsRouter.get('/:id', (req: Request, res: Response) => {
   const url: string = 'https://jsonplaceholder.typicode.com/posts/' + req.params.id

   fetch(url)
      .then(response => response.json())
      .then(data => res.json(data))
      .catch((error) => console.log(error))
})
