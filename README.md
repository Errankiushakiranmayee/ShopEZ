# 🛒 ShopEZ – MERN Stack E-Commerce Application

A full-featured E-Commerce web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The platform allows users to browse products, search by category, manage their shopping cart, place orders, and provides an admin dashboard to manage products and categories.

---

# 📌 Project Overview

ShopEZ is designed to simulate a real-world online shopping platform. It demonstrates full-stack web development concepts including user authentication, REST APIs, database integration, admin management, and responsive UI development.

---

# 🚀 Tech Stack

### Frontend

* React.js
* React Router DOM
* Bootstrap
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcryptjs

---

# ✨ Features

## 👤 User Features

* User Registration
* User Login
* Secure JWT Authentication
* Browse Products
* Search Products
* Filter Products by Category
* View Product Details
* Add Products to Cart
* Place Orders
* View Order History

## 👨‍💼 Admin Features

* Admin Login
* Add New Products
* Update Existing Products
* Manage Product Categories
* Manage Orders
* Admin Dashboard

---

# 📂 Project Structure

```text
ShopEZ
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   ├── services
│   │   └── App.js
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

# ⚙️ Setup Instructions

## 1. Clone the Repository

```bash
git clone https://github.com/Errankiushakiranmayee/ShopEZ.git
```

---

## 2. Install Frontend Dependencies

```bash
cd client
npm install
```

Start the frontend:

```bash
npm start
```

Frontend runs at:

```text
http://localhost:3000
```

---

## 3. Install Backend Dependencies

```bash
cd server
npm install
```

Start the backend:

```bash
node index.js
```

Backend runs at:

```text
http://localhost:6001
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

> **Note:** Never commit the `.env` file to GitHub.

---

# 📡 API Overview

## Authentication

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | `/api/users/register` | Register a new user |
| POST   | `/api/users/login`    | User login          |

---

## Products

| Method | Endpoint                                  | Description            |
| ------ | ----------------------------------------- | ---------------------- |
| GET    | `/api/products/fetch-products`            | Get all products       |
| GET    | `/api/products/fetch-product-details/:id` | Get product details    |
| GET    | `/api/products/fetch-categories`          | Get product categories |
| POST   | `/api/products/add-new-product`           | Add a product (Admin)  |
| PUT    | `/api/products/update-product/:id`        | Update product (Admin) |

---

## Cart

| Method | Endpoint    | Description      |
| ------ | ----------- | ---------------- |
| GET    | `/api/cart` | View cart        |
| POST   | `/api/cart` | Add item to cart |

---

## Orders

| Method | Endpoint      | Description |
| ------ | ------------- | ----------- |
| GET    | `/api/orders` | View orders |
| POST   | `/api/orders` | Place order |

---

## Admin

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| POST   | `/api/admin/login` | Admin login     |
| GET    | `/api/admin`       | Admin dashboard |

---

# 🧪 How to Run the Project

1. Start the backend server.
2. Ensure MongoDB Atlas is connected successfully.
3. Start the React frontend.
4. Open the application in your browser.
5. Register or log in.
6. Browse products and place orders.
7. Log in as an admin to manage products.

---

# 📷 Screenshots

You can add screenshots such as:

* Home Page
* Login Page
* Registration Page
* Product Listing
* Product Details
* Cart
* Admin Dashboard
* Add Product Page

*(Upload screenshots into a `screenshots` folder and reference them here later.)*

---

# 📌 Notes

* MongoDB Atlas is used as the cloud database.
* JWT secures authenticated routes.
* Passwords are encrypted using bcryptjs.
* The application follows a modular MVC architecture.
* Categories and products are managed through the Admin Dashboard.
* The `.env` file is excluded from version control for security.

---

# 🔮 Future Enhancements

* Product Reviews and Ratings
* Wishlist
* Online Payment Integration
* Order Tracking
* Email Notifications
* Inventory Management
* Product Recommendations
* Responsive Mobile UI Improvements

---

