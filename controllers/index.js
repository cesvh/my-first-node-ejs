const items = [
    { id: 1, item: "Mercurio" },
    { id: 2, item: "Venus" },
    { id: 3, item: "Tierra" },
    { id: 4, item: "Marte" }
];
const index = (req, res) => {
    res.render('pages', {
        title: "index.ejs",
        header: "Index",
        h1: "Welcome to my website!",
        p: "main > div > p > index.ejs"
    });
};
const about = (req, res) => {
    res.render('pages/about', {
        title: "about.ejs",
        header: "About",
        h1: "About me!",
        p: "main > div > p > about.ejs"
    });
};
const help = (req, res) => {
    res.render('pages/help', {
        title: "help.ejs",
        header: "Help",
        h1: "Help!",
        p: "main > div > p > help.ejs"
    });
};
const getItems = (req, res) => {
    res.render('pages/items', {
        title: "items.ejs",
        header: "Items",
        h1: "Items!",
        p: "main > div > p > items.ejs",
        items
    });
};
const addItems = (req, res) => {
    const { txtItem } = req.body;
    items.push({
        id: items.length + 1,
        item: txtItem
    });
    res.redirect('/item');
};
module.exports = { index, about, help, getItems, addItems };
