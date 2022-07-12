import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.get('/*', (req, res) => {
    res.status(200).sendFile(path.resolve('build', 'index.html'));
})

app.listen(PORT);