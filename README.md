# ShopKart.com

ShopKart is a feature-rich shopping website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It offers a seamless shopping experience for users, featuring secure user authentication, detailed product descriptions, a shopping cart, and an admin panel for managing users and products.

## Features

- **User Authentication**: Secure login and signup with JWT authentication.
- **Product Browsing**: Browse products with detailed descriptions, images, and prices.
- **Shopping Cart**: Add products to the cart and view the cart summary with total price and quantity.
- **Admin Panel**: 
  - Manage users: View all users with details (Name, Email, Role, Created Date).
  - Manage products: Add, update, and delete products with details (Product Name, Brand Name, Category, Product Image, Price, Selling Price, Description).

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Image Hosting**: Cloudinary

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js
- npm or yarn

## Setting Up the MERN ShopKart App

### Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/ShopKart.git

```
### Backend Configuration

1. **Environment Files**: Navigate to the `backend` folder and create a `.env` file with the following content:

    ```plaintext
    MONGODB_URI=your_mongodb_connection_string
    TOKEN_SECRET_KEY=your_jwt_secret_key
    FRONTEND_URL=http://localhost:3000
    ```

2. **Install Dependencies**: Install the required dependencies for the backend:

    ```bash
    cd backend
    npm install
    ```

3. **Run the Backend Server**: Start the backend server:

    ```bash
    npm run dev
    ```

### Frontend Configuration

1. **Environment Files**: Navigate to the `frontend` folder and create a `.env` file with the following content:

    ```plaintext
    REACT_APP_CLOUD_NAME_CLOUDINARY=your_cloudinary_cloud_name
    ```

2. **Install Dependencies**: Install the required dependencies for the frontend:

    ```bash
    cd frontend
    npm install
    ```

3. **Run the Frontend Application**: Start the frontend application:

    ```bash
    npm start
    ```

The application should now be running on `http://localhost:3000`.
