import express, { Request, Response } from 'express';
import path from 'path';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

const app = express();

// a little bit more compression for
app.use(compression());

// in order to prevent spammers, who are refreshing like millions of time per minute
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.use((req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(5000, () => {
  console.log('Server Started at Port, 5000');
});
