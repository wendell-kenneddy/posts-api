import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { usersRouter } from '@/modules/users/routes';
import { postsRouter } from '@/modules/posts/routes';
import { errorHandler } from './middlewares/errorHandler';
import { commentsRouter } from './modules/comments/routes';

const PORT = process.env.NODE_ENV === 'development' ? 3333 : process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(postsRouter);
app.use(commentsRouter);
app.use(errorHandler);

app.listen(PORT, () => {});
