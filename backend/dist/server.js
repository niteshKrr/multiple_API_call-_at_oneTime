"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import cors from 'cors';
var cors = require('cors');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use(cors());
app.get('/first', (req, res) => {
    res.send('First API call througn axios');
});
app.get('/second', (req, res) => {
    res.send('Second API call througn axios');
});
app.get('/third', (req, res) => {
    res.send('Third API call througn axios');
});
app.get('/fourth', (req, res) => {
    res.send('Fourth API call througn axios');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
