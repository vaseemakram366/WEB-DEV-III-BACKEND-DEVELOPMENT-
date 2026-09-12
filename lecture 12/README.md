# Lecture 12: Student REST API

This lecture demonstrates how to build a simple REST API with **Node.js** and **Express**. The API supports creating, reading, updating, and deleting student records.

Student data is stored in memory in `data/studentData.js`, so changes are lost whenever the server restarts.

## Requirements

- Node.js and npm

## Run the server

From this directory, install the dependencies and start the development server:

```bash
npm install
npm start
```

The server listens on `http://localhost:3000`.

## Project structure

```text
server.js                       Express application entry point
routes/studentsRoutes.js         Student route definitions
controller/studentController.js Request handlers for CRUD operations
data/studentData.js             In-memory student records
```

## API endpoints

All endpoints use the `/api/students` base path.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/students` | Return all students |
| `GET` | `/api/students/:rollNo` | Return one student |
| `POST` | `/api/students` | Create a student |
| `PUT` | `/api/students/:rollNo` | Update a student |
| `DELETE` | `/api/students/:rollNo` | Delete a student |

### Get all students

```bash
curl http://localhost:3000/api/students
```

### Get one student

```bash
curl http://localhost:3000/api/students/1
```

### Create a student

Send JSON with `name` and `section`. The server assigns the next `rollNo`.

```bash
curl -X POST http://localhost:3000/api/students ^
	-H "Content-Type: application/json" ^
	-d "{\"name\":\"Meera\",\"section\":\"Core-B\"}"
```

### Update a student

The `PUT` endpoint accepts `name`, `section`, or both. Fields that are not provided keep their existing values.

```bash
curl -X PUT http://localhost:3000/api/students/1 ^
	-H "Content-Type: application/json" ^
	-d "{\"section\":\"Core-A\"}"
```

### Delete a student

```bash
curl -X DELETE http://localhost:3000/api/students/1
```

## Error response

When a `rollNo` does not exist, the API returns a `404` response:

```json
{
	"success": false,
	"message": "student not found"
}
```

## Concepts covered

- Creating an Express server
- Parsing JSON request bodies with `express.json()`
- Organizing routes and controllers
- Implementing CRUD operations
- Reading route parameters with `req.params`
- Reading request data with `req.body`
- Returning JSON responses and HTTP status codes
