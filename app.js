// core modules
const path = require('path')


// external modules
const express = require("express");

// local modules
const userRouter = require("./routes/userRouter");
const {hostRouter} = require('./routes/hostRouter');
const rootPath = require('./utils/pathUtil');
const errorController  = require('./controllers/errors');



const app = express();

app.set('view engine','ejs')
app.set('views','views')


app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter)

// use css
app.use(express.static(path.join(rootPath,'public',))
);

app.use(errorController.get404);


const port = 3001;
app.listen(port, () => {
  console.log(`Server run on http://localhost:${port}`);
});
