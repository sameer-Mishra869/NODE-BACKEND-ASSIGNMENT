# Assignment 5 – Node.js & Express.js

## Express Basics Assignment

This assignment demonstrates the basics of creating an Express.js server and handling different types of routes, including static routes, dynamic route parameters, multiple route parameters, query parameters, and request logging.

---

## Technologies Used

* Node.js
* Express.js
* JavaScript
* Visual Studio Code

---

## Project Structure

```text
express-basics-assignment/
│
├── server.js
├── package.json
├── package-lock.json
├── node_modules/
└── README.md
```

---

# Task 1 – Basic Routes

Three basic GET routes were created:

### Home Route

**Route:**

```text
GET /
```

**URL:**

```text
http://localhost:3000/
```

**Response:**

```text
Welcome to Home Page
```

### About Route

**Route:**

```text
GET /about
```

**URL:**

```text
http://localhost:3000/about
```

**Response:**

```text
This is About Page
```

### Contact Route

**Route:**

```text
GET /contact
```

**URL:**

```text
http://localhost:3000/contact
```

**Response:**

```text
This is Contact Page
```

### Output Screenshots

![alt text](<Screenshot 2026-09-03 at 1.47.55 AM.png>) 
![alt text](<Screenshot 2026-09-03 at 1.48.11 AM.png>) 
![alt text](<Screenshot 2026-09-03 at 1.48.34 AM.png>)


---

# Task 2 – Route Parameter

A dynamic route was created to accept a name from the URL.

### Route

```text
GET /user/:name
```

### Example

```text
http://localhost:3000/user/john
```

### Response

```text
Hello john
```

The dynamic parameter is accessed using:

```javascript
req.params.name
```

### Output Screenshot
![alt text](<Screenshot 2026-09-03 at 1.48.50 AM.png>)


---

# Task 3 – Multiple Route Parameters

A route was created to handle multiple dynamic values from the URL.

### Route

```text
GET /product/:id/:category
```

### Example

```text
http://localhost:3000/product/101/electronics
```

### Response

```text
Product ID: 101, Category: electronics
```

The parameters are accessed using:

```javascript
req.params.id
req.params.category
```

### Output Screenshot

![alt text](<Screenshot 2026-09-03 at 1.49.05 AM.png>)

---

# Task 4 – Query Parameters

A search route was created to read data using query parameters.

### Route

```text
GET /search
```

### Example

```text
http://localhost:3000/search?name=john&role=developer
```

### Response

```text
Name: john, Role: developer
```

The query parameters are accessed using:

```javascript
req.query.name
req.query.role
```

### Output Screenshot
![alt text](<Screenshot 2026-09-03 at 1.49.20 AM.png>)

---

# Task 5 – Request–Response Understanding

Middleware was used to display the request method and URL in the terminal for every route.

The request information is accessed using:

```javascript
req.method
req.originalUrl
```

### Sample Console Output

```text
GET /
GET /about
GET /contact
GET /user/john
GET /product/101/electronics
GET /search?name=john&role=developer
```

### Terminal Screenshot
![alt text](<Screenshot 2026-09-03 at 1.49.43 AM.png>)

---

# How to Run the Project

## 1. Install Dependencies

Open the terminal inside the project folder and run:

```bash
npm install
```

If Express has not been installed yet, run:

```bash
npm install express
```

## 2. Start the Server

Run:

```bash
node server.js
```

The terminal should display:

```text
Server running at http://localhost:3000
```

## 3. Open the Routes

Open the following URLs in a browser:

```text
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact
http://localhost:3000/user/john
http://localhost:3000/product/101/electronics
http://localhost:3000/search?name=john&role=developer
```

---

# Complete Output Summary

| Task   | Route                              | Expected Output                        |
| ------ | ---------------------------------- | -------------------------------------- |
| Task 1 | `/`                                | Welcome to Home Page                   |
| Task 1 | `/about`                           | This is About Page                     |
| Task 1 | `/contact`                         | This is Contact Page                   |
| Task 2 | `/user/john`                       | Hello john                             |
| Task 3 | `/product/101/electronics`         | Product ID: 101, Category: electronics |
| Task 4 | `/search?name=john&role=developer` | Name: john, Role: developer            |


---

# Conclusion

The Express.js server was successfully created and tested. The assignment covers basic routes, dynamic route parameters, multiple route parameters, query parameters, and request-method/URL logging using Express.js.
