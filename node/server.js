const express = require('express');
const cors    = require('cors');

const mainRoute   = require('./routes/mainRoute');
const serverRoute = require('./routes/serverRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', mainRoute);
app.use('/server', serverRoute);

const PORT = process.env.PORT || 5001;

try {
    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
} catch(e) {
    console.log('Ошибка сервера', e);
}