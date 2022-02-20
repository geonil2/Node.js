import express from 'express';
import cors from 'cors'; // cors error 쉽게 잡아줌
import cookieParser from 'cookie-parser'; // express.json 처럼 cookie 확인가능
import morgan from 'morgan'; // 개발중에 console로 쉽게 요청을 확인할 수 있음
import helmet from 'helmet'; // 보안관련 header를 작성해줌!

const app = express();

const corsOption = {
    origin: ['http://127.0.0.1:3000'],
    optionsSuccessStatus: 200,
    credentials: true, //Access-Control-Allow-Credentails: true
};

app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(cors(corsOption));
app.use(helmet());

app.get('/', (req, res) => {
    console.log(req.body);
    console.log(req.cookies);
    res.send('Welcome!');
})

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'OPTIONS, GET, POST, PUT, DELETE'
//     );
//     next();
// });

app.listen(8080);