# todo-backend

# MERN To-Do App Backend

This is the backend API for the MERN To-Do application. It provides CRUD operations for managing tasks with title, description, status, and priority.

---

##  Prerequisites

- **Node.js** v18 or higher
- **npm** (comes with Node.js)
- **MongoDB** (local installation) 

---

##  Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adeife25/todo-backend.git
   cd todo-backend

## Install dependencies
npm init -y
npm install express
npm install dotenv
npm install cors
npm install mongoose


## Create .env file in the project root:
MONGO_URI=your_mongodb_connection_string
PORT=5000

## Run the server
npm start

The backend will start at:
http://localhost:5000

## API Documentation
1. Get All Tasks
Method: GET

URL: /api/tasks

Response Example:

[
  {
    "_id": "abc123",
    "title": "Buy groceries",
    "description": "Milk, bread, eggs",
    "status": "pending",
    "priority": "high",
    "createdAt": "2026-01-28T17:00:00Z"
  }
]


2. Get Task by ID
Method: GET

URL: /api/tasks/:id

Request Example:

http
GET /api/tasks/abc123
Response Example:

json
{
  "_id": "abc123",
  "title": "Buy groceries",
  "description": "Milk, bread, eggs",
  "status": "pending",
  "priority": "high",
  "createdAt": "2026-01-28T17:00:00Z"
}
3. Create a Task
Method: POST

URL: /api/tasks

Request Body Example:

json
{
  "title": "Finish project",
  "description": "Complete backend API",
  "status": "in-progress",
  "priority": "medium"
}
Response Example:

json
{
  "_id": "def456",
  "title": "Finish project",
  "description": "Complete backend API",
  "status": "in-progress",
  "priority": "medium",
  "createdAt": "2026-01-28T17:10:00Z"
}
4. Update a Task
Method: PUT

URL: /api/tasks/:id

Request Body Example:

json
{
  "status": "done",
  "priority": "high"
}
Response Example:

json
{
  "_id": "def456",
  "title": "Finish project",
  "description": "Complete backend API",
  "status": "done",
  "priority": "high",
  "updatedAt": "2026-01-28T17:20:00Z"
}
5. Delete a Task
Method: DELETE

URL: /api/tasks/:id

Response Example:

json
{
  "message": "Task deleted successfully"
}


## Testing
You can test the API using Postman or cURL.
 (GET, POST, PUT, DELETE).



Postman requests (GET all, GET by ID, POST, PUT, DELETE)

 ## Notes
Ensure your MongoDB connection string in .env is correct.

CORS is enabled so the frontend can connect when deployed separately.