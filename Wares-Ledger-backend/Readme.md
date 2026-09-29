# Wares Ledger Backend

A lightweight Express backend for managing a product catalog. This project uses an in-memory array as its data store, so it is ideal for learning CRUD APIs and frontend integration.

## Project Purpose

This app exposes REST endpoints for:

- listing products
- getting a single product
- creating a product
- updating a product
- deleting a product

It is designed for quick demos and beginner-friendly backend development.

## Tech Stack

- Node.js
- Express.js
- CORS
- Nodemon

## Project Structure

```text
Wares-Ledger-backend/
├── package.json
├── server.js
├── package-lock.json
└── .gitignore
```

## Installation

From the project folder:

```bash
npm install
```

## Run the Server

```bash
npm start
```

The server starts on:

```text
http://localhost:5000
```

## API Endpoints

### 1) Get all products

```http
GET /products
```

Returns a JSON array of all products.

Example response:

```json
[
  {
    "id": 1,
    "name": "Enamel Camp Mug",
    "category": "Kitchen",
    "price": 18,
    "stock": 42,
    "color": "#2B6E68",
    "rating": 4
  }
]
```

### 2) Get one product by ID

```http
GET /products/:id
```

Returns one product matching the given ID.

### 3) Create a product

```http
POST /products
```

Request body example:

```json
{
  "name": "Copper Water Bottle",
  "category": "Outdoors",
  "price": 38,
  "stock": 20,
  "color": "#C67C3E",
  "rating": 5
}
```

Success response:

```json
{
  "id": 6,
  "name": "Copper Water Bottle",
  "category": "Outdoors",
  "price": 38,
  "stock": 20,
  "color": "#C67C3E",
  "rating": 5
}
```

### 4) Update a product

```http
PUT /products/:id
```

Request body example:

```json
{
  "price": 42,
  "stock": 15
}
```

Returns the updated product object.

### 5) Delete a product

```http
DELETE /products/:id
```

Returns a `204 No Content` response if the product is deleted successfully.

## Product Fields

Each product object has:

- `id`: numeric identifier
- `name`: product name
- `category`: product category
- `price`: numeric price
- `stock`: inventory count
- `color`: hex color value
- `rating`: numeric rating

## Notes

- The app currently stores data in memory only.
- When the server restarts, the product list resets to its original sample data.
- This project is a learning project and is not connected to a database yet.

## Example Workflow

1. Start the server with `npm start`
2. Use a client such as Postman or a frontend app to call the routes
3. Test CRUD operations against `http://localhost:5000/products`

## Optional Next Improvements

- connect to MongoDB or MySQL
- add validation for all fields
- add search and filtering
- create a separate `routes` and `controllers` structure
- add environment variables for port and config
