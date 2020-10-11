import express, {Application} from 'express';
import {usersRouter} from './api/users'
import {postsRouter} from './api/posts'

// Load config
//dotenv.config({ path: './config/config.env' })

const app: Application = express();

// middleware for body/form parser
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// endpoints
app.use('/users', usersRouter)
app.use('/posts', postsRouter)

// define port for the server
const PORT: string | number = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log("Server started on port " + PORT);
});