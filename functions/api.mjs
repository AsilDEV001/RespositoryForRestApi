import express from 'express';
import BodyParser from 'body-parser';
import serverless from 'serverless-http';

const api = express();
const PORT = 9999;

api.use(BodyParser.json());

const data = [
    {name: "user1", surname: "Chivalek pavuk"},
    {name: "user1", surname: "Spaydermon"}
];

api.get('/getAllUsers', (req,res) => {
    res.json(data);
});

api.post('/addNewUser', (req,res) => {
    data.push(req.body);
    res.send("All OK!");
});

export const handler = serverless(api)