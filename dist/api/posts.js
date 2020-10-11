"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.postsRouter = express_1.default.Router();
// get all posts
exports.postsRouter.get('/', (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    node_fetch_1.default(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch((error) => console.log(error));
});
// get a post with a specific id
exports.postsRouter.get('/:id', (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/' + req.params.id;
    node_fetch_1.default(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch((error) => console.log(error));
});
