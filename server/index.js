const express = require("express");
const cors = require("cors"); // Import cors
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;
const database = require("./config/database");
const taskRouter = require("./routes/task");

// Initialize Express app
const app = express();

// CORS configuration
const allowedOrigins = [
  'http://localhost:3000', // Development environment
  'https://task-management-zeta-lilac.vercel.app', // Production environment
  'https://gathering-astrologer.vercel.app' // Another environment if needed
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  credentials: true // Allow credentials if needed
}));

// Connect to the database
database.connect();

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for testing
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: 'Your server is up and running....'
  });
});

// Mount API routes
app.use("/api/v1/", taskRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
