# QuickCart
A responsive, lightweight shopping cart built with HTML, CSS, and vanilla JavaScript. Uses browser Local Storage to save cart items and total price, so your cart persists across page reloads. Perfect for learning DOM manipulation, event handling, and client-side data storage.

# 🛒 QuickCart

**QuickCart** is a lightweight and responsive shopping cart application built with **HTML**, **CSS**, and **vanilla JavaScript**.  
It uses the browser’s **Local Storage** 🗄️ to persist cart items and total price—so your cart stays saved even after reloading the page.  

Perfect for beginners to learn **DOM manipulation**, **event handling**, and **client-side data storage**.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) ![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellowgreen) ![Repo size](https://img.shields.io/github/repo-size/kaihere14/-Quickcart) ![Last commit](https://img.shields.io/github/last-commit/kaihere14/-Quickcart) ![Issues](https://img.shields.io/github/issues/kaihere14/-Quickcart) ![GitHub stars](https://img.shields.io/github/stars/kaihere14/-Quickcart?style=social)


---

## 🚀 Features

- 🛍️ **List of products** with name and price.
- ➕ **Add to cart** with a single click.
- 💵 **Auto calculates total** in real-time.
- 🗑️ **Remove items** easily.
- 💾 **Persistent cart** via Local Storage.
- 🎨 **Responsive Dark-Themed UI**.
- ⚡ **No frameworks**—pure HTML, CSS, and JS.

---

## 📂 Project Structure

📦 quickcart
┣ 📜 index.html # Main HTML page
┣ 📜 styles.css # Dark theme styles
┣ 📜 script.js # Cart logic + Local Storage
┗ 📜 README.md # Project documentation


---

## 🛠️ Installation & Usage

1. **Clone the repository**
    ```
    git clone https://github.com/kaihere14/-Quickcart.git
    ```

2. **Open the project folder**
    ```
    cd quickcart
    ```

3. **Run the application**
    - Just open `index.html` in your web browser.
    - No server required 🚀.

---

## 📌 How It Works

- **Products** are displayed from a predefined JavaScript array.
- When you click on a product, it’s saved into `localStorage` as `data`.
- The **total price** is stored in `localStorage` under `price`.
- A `setInterval` refreshes the cart display every second, ensuring it stays updated.
- **Persistence:** Even after you close or refresh the page, the cart data stays—until you checkout or manually clear it.

---

## 🧠 Learning Objectives

By exploring QuickCart, you’ll learn:
- 📦 Using **Local Storage** for client-side persistence.
- 🎯 Handling **DOM events** like `click`.
- ✨ Dynamically rendering HTML from JS arrays.
- 🖌️ Styling with **CSS Flexbox** and a dark theme.
- 🧹 Clearing and updating saved data.

---

## 🎨 UI Preview

🖤 Dark mode interface with minimal design:  
- Products displayed in cards
- Total price at the bottom
- One-click checkout flow

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---


---

Made with ❤️ using HTML, CSS, and JavaScript.
