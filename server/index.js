const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const apiRoutes = require('./routes/api')

app.use('/api', apiRoutes)
app.get('/', (req, res) => res.send(`Hello from port ${port}`));

app.listen(port, () => console.log(`App is listening on port ${port}`));
