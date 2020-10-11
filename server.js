const express = require('express');

// Load config
//dotenv.config({ path: './config/config.env' })

const app = express();

// middleware for body/form parser
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// endpoints
app.use('/users', require('./api/users'))
app.use('/posts', require('./api/posts'))

// define port for the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log("Server started on port " + PORT);
});