import * as express from "express";
import * as cors from "cors";
import conDB from './config/db.config';

const app = express();
app.set('index', 'index');

conDB();

app.use(cors());
app.use(express.json());

import postRouter from './routes/post.route';

app.use('/api/posts', postRouter);

const PORT = parseInt(process.env.PORT as string, 10) || 5000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`);
});
