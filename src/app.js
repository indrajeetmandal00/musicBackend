const express = require('express');
const cookies = require('cookie-parser');
const app = express();

const authRoutes = require('./routes/auth.routes');
const musicRoutes = require('./routes/music.routes');


app.use(cookies());
app.use(express.json());


app.use("/api/auth", authRoutes); //1️⃣A
app.use("/api/music", musicRoutes); //2️⃣A

module.exports=app;