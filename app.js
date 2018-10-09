require('app-module-path').addPath(__dirname);
const bodyParser = require('body-parser');
const app = require('express')();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', require('./app/routes/index'));

app.listen(port, () => console.log(`Servidor ouvindo na porta ${port}`));
