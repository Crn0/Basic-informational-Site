import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './src/html'})
});

router.get('/about', (req, res) => {
    res.sendFile('about.html', { root: './src/html'})
});

router.get('/contact-me', (req, res) => {
    res.sendFile('contact-me.html', { root: './src/html'})
});

export default router;