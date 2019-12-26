const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
// Import Routes
const authRoute = require('./routes/auth');
const receipe = require('./routes/receips');

const port = process.env.PORT || 4000;

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT || process.env.MONGODB_URI,
  { 
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  () => {
    console.log('connected to DB')
});

// Middleware
app.use(express.json());
app.use(cors());
// Route middlewares
app.use('/api/user', authRoute);
app.use('/api', receipe);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
