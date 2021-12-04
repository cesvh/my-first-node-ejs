const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// DB
// Settings
app.set('view engine', 'ejs');
// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Routes
const router = require('./routes');
app.use(router);
// Static files
app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`Server runnning on http://localhost:${PORT}`);
});
