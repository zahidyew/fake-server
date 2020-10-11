"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("./api/users");
const posts_1 = require("./api/posts");
// Load config
//dotenv.config({ path: './config/config.env' })
const app = express_1.default();
// middleware for body/form parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// endpoints
app.use('/users', users_1.usersRouter);
app.use('/posts', posts_1.postsRouter);
// define port for the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
