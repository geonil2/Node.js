import express from 'express';
import postRouter from './router/post.js'
import userRouter from './router/post.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
const options = {
    dotfiles : 'ignore',
    maxAge: '1d',
}
app.use(express.static('public', options));

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(8080);