const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid'); // Import uuid package
const { generate } = require('rxjs');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ticketBooking', {
 
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Ticket schema and model
const ticketSchema = new mongoose.Schema({
   name:{type:String,require:true},
   idNumber:{type:String,require:true},
  movieTitle: { type: String, required: true },
  screen: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  seats: { type: Number, required: true },
  seatType: { type: String, required: true },
  amount: { type: Number, required: true },
  ticketNumber: { type: String, required: true, unique: true } // Add unique constraint
});

const Ticket = mongoose.model('Ticket', ticketSchema);

// Routes
app.post('/api/tickets', async (req, res) => {
  try {
    const ticketData = req.body;
    ticketData.ticketNumber = generateTicketNumber(); // Generate unique ticket number
    const ticket = new Ticket(ticketData);
    const savedTicket = await ticket.save();
    console.log('Ticket saved successfully:', savedTicket);
    res.status(200).send(savedTicket);
  } catch (err) {
    console.error('Error saving ticket:', err);  // Log errors
    res.status(500).send(err);
  }
});

function generateTicketNumber() {
   const min = 10000; // Minimum ticket number value
   const max = 99999; // Maximum ticket number value
   return String(Math.floor(min + Math.random() * (max - min + 1))); // Generate a random number within range and convert to string
 }
app.get('/api/tickets', async (req, res) => {
  try {
    const tickets = await Ticket.find({});
    res.status(200).send(tickets);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
