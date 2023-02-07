const path = require('path');

const express = require('express');

const mainRoutes = require('./routes/main');

const rootDir = require('./util/path')

const app = express();

app.use(express.static(path.join(rootDir, 'public')))

app.use(mainRoutes);

// redirect to home page
app.use((req, res, next) => {
    res.redirect('/home');
});

app.listen(3000);