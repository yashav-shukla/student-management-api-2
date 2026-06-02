

<p align="center">
  <h1 align="center">🎓 Student Management API 2</h1>
</p>

<p align="center">
  A RESTful API built with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MySQL</strong> using the <strong>MVC Architecture</strong> pattern.
</p>

<p align="center">
  Manage student records with complete CRUD operations using raw SQL queries.
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mysql,javascript,git,github,vscode" />
</p>

---

## 🚀 Features

✅ Create Student Records

✅ Retrieve All Students

✅ Retrieve Student By ID

✅ Update Student Details

✅ Delete Student Records

✅ MySQL Database Integration

✅ MVC Architecture

✅ Raw SQL Queries

✅ Error Handling

✅ Connection Pooling

---

## 🛠️ Tech Stack

| Technology   | Purpose              |
| ------------ | -------------------- |
| Node.js      | Runtime Environment  |
| Express.js   | Backend Framework    |
| MySQL        | Database             |
| mysql2       | Database Driver      |
| JavaScript   | Programming Language |
| Git & GitHub | Version Control      |

---

## 📁 Project Structure

```text
student-management-api-2/
│
├── controllers/
│   └── studentController.js
│
├── models/
│   └── studentModel.js
│
├── routes/
│   └── studentRoutes.js
│
├── config/
│   └── db.js
│
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Database Setup

### Create Database

```sql
CREATE DATABASE student_management;

USE student_management;
```

### Create Students Table

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    age INT
);
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yashavshukla/student-management-api-2.git
```

Navigate into the project:

```bash
cd student-management-api-2
```

Install dependencies:

```bash
npm install
```

---

## 🔧 Environment Setup

Configure your database connection inside:

```text
config/db.js
```

Example:

```javascript
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "student_management",
    connectionLimit: 10
});

module.exports = db;
```

---

## ▶️ Run the Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

Expected Output:

```bash
Server running on port 3000
```

---

## 📮 API Endpoints

### Create Student

```http
POST /students
```

Request Body:

```json
{
  "name": "MS Dhoni",
  "email": "dhoni@example.com",
  "age": 42
}
```

---

### Get All Students

```http
GET /students
```

---

### Get Student By ID

```http
GET /students/:id
```

Example:

```http
GET /students/1
```

---

### Update Student

```http
PUT /students/:id
```

Request Body:

```json
{
  "name": "Captain Cool",
  "email": "captaincool@example.com",
  "age": 42
}
```

---

### Delete Student

```http
DELETE /students/:id
```

Example:

```http
DELETE /students/2
```

---

## 🧪 Assignment Operations

### Inserted Students

#### Student 1

```json
{
  "name":"MS Dhoni",
  "email":"dhoni@example.com",
  "age":42
}
```

#### Student 2

```json
{
  "name":"Virat Kohli",
  "email":"virat.kohli@example.com",
  "age":35
}
```

---

### Updated Student

```json
{
  "name":"Captain Cool",
  "email":"captaincool@example.com",
  "age":42
}
```

---

### Deleted Student

```text
Virat Kohli
```

---

### Verification

```http
GET /students
```

Expected Response:

```json
[
  {
    "id": 1,
    "name": "Captain Cool",
    "email": "captaincool@example.com",
    "age": 42
  }
]
```

---

## ⚠️ Error Handling

The API handles:

* Student Not Found
* Duplicate Email Entries
* Invalid Student ID
* Database Connection Errors
* SQL Query Errors

---

## 🔄 MVC Architecture

### Model

Handles all database operations.

```text
models/studentModel.js
```

### View

API responses in JSON format.

### Controller

Handles request and response logic.

```text
controllers/studentController.js
```

### Routes

Defines API endpoints.

```text
routes/studentRoutes.js
```

---
## 👨‍💻 Author

<p align="center">
  <a href="https://github.com/yashav-shukla">
    <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
  </a>
</p>

<p align="center">
  <b>Yashav Shukla</b>
</p>

<p align="center">
  <a href="https://github.com/yashav-shukla">
    GitHub Profile
  </a>
</p>

<p align="center">
  <a href="https://github.com/yashav-shukla/student-management-api-2">
    Project Repository
  </a>
</p>

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

<p align="center">
  Made with ❤️ by <a href="https://github.com/yashavshukla">Yashav Shukla</a>
</p>
