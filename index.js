const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// DB
// Settings
app.set('view engine', 'ejs');
// Middleware
// Routes
app.get('/', (req, res) => {
    res.render('pages', {
        h1: "Welcome to my website!",
        p: "main > div > p > index.ejs"
    });
});
app.get('/about', (req, res) => {
    res.render('pages/about', {
        h1: "About me!",
        p: "main > div > p > about.ejs"
    });
});
// Static files
// app.use(express.static('public/'));
app.listen(PORT, () => {
    console.log(`Server runnning on http://localhost:${PORT}`);
});
