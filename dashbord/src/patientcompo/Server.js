// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple schema for the person
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  contact: String,
  email: String,
});

const Person = mongoose.model('Person', personSchema);

app.use(bodyParser.json());

// Endpoint to fetch person details by ID
app.get('/api/person/:id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching person details' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
