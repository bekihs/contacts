const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const http = require('http').createServer(app);

const contactRoutes = require('./api/contact/contact.routes');

app.use(bodyParser.json()); 

if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: [
            'http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://127.0.0.1:8080',
            'http://localhost:8080'
        ],
        credentials: true
    };
    app.use(cors(corsOptions));
}

// routes
app.use('/api/contact', contactRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
}

const port = process.env.PORT || 3030;
http.listen(port, () => {
    console.log('Server is running on port: ' + port);
});
