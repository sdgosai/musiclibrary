// require function
const express = require('express');
const app = express();
const dotenv = require('dotenv');
//dotenv path set
dotenv.config({ path: './.env'});

app.use(express.json());
require('./db/conn');

const userRouter = require('./router/userrouter');
const libraryRouter = require('./router/libraryrouter');


//db require
app.use(userRouter);
app.use(libraryRouter);

// port open 
const port = process.env.PORT;
app.get("/", (req,res) => {
    res.send(`port connected ${port}.`);
});
app.listen(port, () => {
    console.log(`port open ${port}`);
})
