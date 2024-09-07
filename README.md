Task Management Application

This README provides detailed instructions on setting up and running the Task Management Application. It also explains the project structure and design decisions made during development.

Project Structure

Frontend

src/: Contains the React application source code.

components/: Reusable components used throughout the application.

AddTaskModal.js: Modal for adding and editing tasks.

CategorySlider.js: Slider for navigating between task categories.

TaskList.js: Displays the list of tasks based on category.

TaskItem.js: Represents individual task details.

hooks/: Custom hooks for handling state and side effects.

pages/: Page components representing different views.

Home.js: Main page displaying the task management UI.

services/: API interaction and async operations.

taskAPI.js: Functions to interact with task-related endpoints.

App.js: Main application component.

index.js: Entry point for the React application.

Backend

src/: Contains the Node.js backend source code.

controllers/: Logic for handling HTTP requests.

taskController.js: Handles CRUD operations for tasks.

streamingController.js: Handles streaming data operations.

models/: Defines database schemas and models.

taskModel.js: Task schema definition.

routes/: Route definitions for the API.

taskRoutes.js: Routes for task-related endpoints.

streamingRoutes.js: Routes for streaming data.

services/: Business logic and utility functions.

app.js: Application setup and middleware configuration.

server.js: Entry point for the Node.js application.

Setup and Run Instructions

Frontend

Clone the Repository:

git clone <repository-url>

Navigate to the Frontend Directory:

cd frontend
Install Dependencies:

npm install
Set Up Environment Variables:

Create a .env file in the root of the frontend directory and add the API URL for the backend:

REACT_APP_API_URL=<your-backend-api-url>
Start the Development Server:

npm start
Open the Application:

Visit http://localhost:3000 in your browser.

Backend

Navigate to the Backend Directory:

cd backend
Install Dependencies:

npm install
Set Up Environment Variables:

Create a .env file in the root of the backend directory and add the necessary environment variables (e.g., database connection strings, API keys).
Start the Server:

npm start
Test the API Endpoints:

Use a tool like Postman to interact with the backend API endpoints.
