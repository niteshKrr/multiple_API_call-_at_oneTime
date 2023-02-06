import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.get('/first', (req: Request, res: Response) => {
  res.send('First API call througn axios');
});

app.get('/second', (req: Request, res: Response) => {
  res.send('Second API call througn axios');
});

app.get('/third', (req: Request, res: Response) => {
  res.send('Third API call througn axios');
});

app.get('/fourth', (req: Request, res: Response) => {
  res.send('Fourth API call througn axios');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});