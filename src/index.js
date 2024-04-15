import express from 'express';
import router from './router/router.js';

const app = express();
const port = 8080

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

