const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Import Routes
const authRoute = require('./routes/auth');

const port = process.env.PORT || 3000;

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT,
  { useUnifiedTopology: true,
    useNewUrlParser: true 
  },
  () => {
    console.log('connected to DB')
});

// Middleware
app.use(express.json());
// Route middlewares
app.use('/api/user', authRoute);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
