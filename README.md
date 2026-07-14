# ShopEZ — MERN Stack E-commerce Application

A full-featured E-commerce web application developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to browse products, manage carts, place orders, and provides an admin dashboard to manage products and orders.

---

# Tech Stack

## Frontend

* React.js
* React Router
* Bootstrap
* Axios

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* JWT Authentication
* bcryptjs

---

# Features

## User Module

* User Registration
* User Login
* JWT Authentication
* Browse Products
* Search Products
* Product Details
* Shopping Cart
* Place Orders
* Order History

## Admin Module

* Admin Login
* Add Products
* Update Products
* Manage Categories
* Manage Orders
* Dashboard

---

# Folder Structure

```
ShopEZ
│
├── client
│   ├── public
│   ├── src
│   ├── components
│   ├── pages
│   ├── context
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# Setup Instructions

## Clone Repository

```
git clone https://github.com/Errankiushakiranmayee/ShopEZ.git
```

---

## Frontend Setup

```
cd client
npm install
npm start
```

The React application will run on:

```
http://localhost:3000
```

---

## Backend Setup

```
cd server
npm install
node index.js
```

Backend server runs on:

```
http://localhost:6001
```

---

# Environment Variables

Create a `.env` file inside the **server** folder.

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# API Overview

## Authentication

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | /api/users/register | Register new user |
| POST   | /api/users/login    | User Login        |

---

## Products

| Method | Endpoint                                | Description             |
| ------ | --------------------------------------- | ----------------------- |
| GET    | /api/products/fetch-products            | Get all products        |
| GET    | /api/products/fetch-product-details/:id | Get product details     |
| GET    | /api/products/fetch-categories          | Get all categories      |
| POST   | /api/products/add-new-product           | Add new product (Admin) |
| PUT    | /api/products/update-product/:id        | Update product          |

---

## Cart

| Method | Endpoint  | Description      |
| ------ | --------- | ---------------- |
| GET    | /api/cart | Get cart         |
| POST   | /api/cart | Add item to cart |

---

## Orders

| Method | Endpoint    | Description |
| ------ | ----------- | ----------- |
| POST   | /api/orders | Place order |
| GET    | /api/orders | View orders |

---

## Admin

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| POST   | /api/admin/login | Admin Login     |
| GET    | /api/admin       | Admin Dashboard |

---

# Notes

* MongoDB Atlas is used as the cloud database.
* JWT is used for user authentication and route protection.
* Passwords are encrypted using bcryptjs.
* Products and categories can be managed through the Admin Dashboard.
* Ensure MongoDB Atlas network access allows your IP address before starting the backend.
* The `.env` file is intentionally excluded from the repository for security.

---

# Future Enhancements

* Product Reviews
* Wishlist
* Online Payment Gateway
* Order Tracking
* Email Notifications
* Product Ratings
* Inventory Management
* Responsive Mobile UI Improvements

---

# Author

**Usha Kiranmayee Erranki**

GitHub:
https://github.com/Errankiushakiranmayee
