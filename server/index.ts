import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.use((req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(5000, () => {
  console.log('Server Started at Port, 5000');
});
