const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;
const database = require("./config/database");
const taskRouter = require("./routes/task");

const app = express();

// CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://task-management-zeta-lilac.vercel.app',
  // Add more origins if needed
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
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
