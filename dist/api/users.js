"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.usersRouter = express_1.default.Router();
// get all users
exports.usersRouter.get('/', (_req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    node_fetch_1.default(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch((error) => console.log(error));
});
// get a user with a specific id
exports.usersRouter.get('/:id', (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/users/' + req.params.id;
    node_fetch_1.default(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch((error) => console.log(error));
});
// create new user
exports.usersRouter.post('/', (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    if (Object.keys(req.body).length === 0) {
        res.json("Form data is undefined");
    }
    else {
        node_fetch_1.default(url, {
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
            res.json("Success");
            console.log(data);
        })
            .catch((error) => console.log(error));
    }
});
// update user's info
exports.usersRouter.patch('/:id', (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/users/' + req.params.id;
    if (Object.keys(req.body).length === 0) {
        res.json("Form data is undefined");
    }
    else {
        node_fetch_1.default(url, {
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
            res.json('Success');
            console.log(data);
        })
            .catch(error => console.log(error));
    }
});
// delete user
exports.usersRouter.delete('/:id', (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/users/' + req.params.id;
    node_fetch_1.default(url, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
        res.json("Success");
        console.log(data);
    })
        .catch(error => console.log(error));
});
// get user albums
exports.usersRouter.get('/:id/albums', (req, res) => {
    let query = "";
    // check if client include query to filter result
    if (req.query.title !== undefined) {
        query = query + "&title=" + req.query.title;
    }
    const url = 'https://jsonplaceholder.typicode.com/users/' + req.params.id + '/albums?' + query;
    node_fetch_1.default(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch((error) => console.log(error));
});
