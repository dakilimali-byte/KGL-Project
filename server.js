require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();

// Telling Express that all  HTML/CSS/JS are in the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); 

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log())
    .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));