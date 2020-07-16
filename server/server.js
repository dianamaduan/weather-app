const express  = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5001;
app.get('/', (req, res) => res.send('Hello World!'));
const weather = require('./routes/weatherRoute')
app.use(cors());
app.use('/', weather);
app.listen(port, () => console.log(`Server running on port ${port}`));