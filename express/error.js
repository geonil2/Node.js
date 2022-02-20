import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
import {} from 'express-async-errors';

const app = express();

app.use(express.json())

app.get('/file1', (req, res) => {
    // try{
    //     const data = fs.readFileSync('/file.txt');
    // } catch (error) {
    //     res.status(404).send('File not found');
    // }

    fs.readFile('/file1.txt', (err, data) => {
        if(err) {
            res.status(404).send('File not found');
        }
    });
    
});

app.get('/file2', (req, res) => {
    return fsAsync.readFile('/file.txt')
});

app.get('/file3', async (req ,res) => {
    const data = await fsAsync.readFile('/file.txt')
});

app.use((error, rq, res, next) => {
    console.error(error);
    res.status(500).json({ message : 'Something went wrong' });
});

app.listen(8080);