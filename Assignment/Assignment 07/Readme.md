# Assignment 07 — Express.js Route & Query Parameters

This assignment covers route parameters, query parameters, and using both route parameters and query parameters together in Express.js.

## Assignment 1: Route Parameters

### Objective

Implement dynamic routing using Route Parameters in Express.js.

### Problem Statement

Develop an Express.js application that:

- Creates a route `/student/:id`.
- Extracts the student ID using route parameters.
- Displays the following message in the browser:
  - `Student ID: <id>`
- If the user visits `/student/101`, the application should display `Student ID: 101`.

### Expected Output

<img width="1058" height="204" alt="Image" src="https://github.com/user-attachments/assets/12e170d2-4e2a-44b0-913a-dd3a37839424" />

## Assignment 2: Query Parameters
### Objective

Retrieve and display data using Query Parameters.

### Problem Statement

Develop an Express.js application that:

- Create a route `/search`.
- Accept the following query parameters:
  - `name`
  - `course`
- Display both values in the browser.
- If no query parameters are provided, display:
  - `No search data provided.`

### Expected Output

<img width="1096" height="255" alt="Image" src="https://github.com/user-attachments/assets/a69d0472-4e7b-406a-b6ce-2acd8d00a0b9" />

# Assignment 3: Student Profile using Route Parameters & Query Parameters

## Objective

Build a dynamic route that uses both Route Parameters and Query Parameters.

## Problem Statement

Develop an Express.js application that:

- Create a route `/student/:id`.
- Retrieve the student ID using route parameters.
- Accept the following query parameters:
  - `name`
  - `course`
- Display all student details in the browser.

## Expected Output

<img width="1058" height="273" alt="Image" src="https://github.com/user-attachments/assets/ede6e7d5-1214-4e8c-9fca-0245e1a95bbc" />

```text
http://localhost:3000/student/101?name=John&course=FullStack

```text
http://localhost:3000/search?name=Ricky&course=Node.js

```text
http://localhost:3000/student/101
