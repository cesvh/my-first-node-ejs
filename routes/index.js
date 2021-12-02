const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages', {
        title: "index.ejs",
        h1: "Welcome to my website!",
        p: "main > div > p > index.ejs"
    });
});
router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: "about.ejs",
        h1: "About me!",
        p: "main > div > p > about.ejs"
    });
});
router.get('/help', (req, res) => {
    res.render('pages/help', {
        title: "help.ejs",
        h1: "About me!",
        p: "main > div > p > help.ejs"
    });
});

module.exports = router;