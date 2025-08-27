# 🛒 Modern E-Commerce Web App

A full-stack e-commerce application built with **React**, **Redux Toolkit**, **Redux Persist**, and **React Router**.  
This app allows users to browse products, filter by categories, view product details, and manage their shopping cart with persistence across sessions.

---

## 🚀 Live Demo

🔗 [View Deployed App](DEPLOY_LINK)  
📹 [Video Demonstration](VIDEO_LINK)

---

## ✨ Features

- 🛍️ **Product Listing** – View all products with images, descriptions, and prices.  
- 📂 **Category Filtering** – Filter products based on category.  
- 🔎 **Product Details Page** – Get detailed info about each product.  
- 🛒 **Shopping Cart** – Add, update quantity, and remove items from cart.  
- 💾 **Persistent Cart** – Cart state is saved using `redux-persist`.  
- 📱 **Responsive UI** – Clean and modern UI theme (as per design reference).  

---

## 🖼️ Screenshots

### 🏠 Home Page
![Home Page](/src/assets/dashboard1.png)  
![Home Page](/src/assets/dashboard2.png)

### 📂 Category Page
![Category Page](/src/assets/category.png)

### 📄 Product Details Page
![Product Details](/src/assets/productdetails.png)

### 🛒 Cart Page
![Cart Page](/src/assets/cart.png)

### 🔎 Search Page
![Search Page](/src/assets/search.png)

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router  
- **State Management**: Redux Toolkit, Redux Persist  
- **UI/Styling**: TailwindCSS / Custom CSS  
- **Build Tool**: Vite / Create React App  

---

## ⚙️ Installation & Setup

Clone this repository:

```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app


Install dependencies:

npm install


Run the development server:

npm run dev


Build for production:

npm run build

📦 Folder Structure
/src
 ├── components/      # UI Components
 ├── pages/           # App Pages (Home, ProductDetails, Cart, etc.)
 ├── redux/           # Redux slices (cart, products, category)
 ├── Utils/           # Store configuration
 ├── App.js           # Main app file
 └── index.js         # Entry point

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.