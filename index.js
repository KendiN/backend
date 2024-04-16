const express = require('express');
const catsRouter = require('./routes/cat.router');
const todoRouter = require('./routes/todos.router');
const app = express();

app.use(express.json());
app.use('/cats', catsRouter);

/*const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});*/

app.use('/todos', todoRouter);

const port = process.env.PORT || 5000;
app.listen(port,() => {
  console.log('Server is running on port ${PORT}');
})