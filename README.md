# QuickCart

A lightweight shopping cart application built with HTML, CSS, and vanilla JavaScript. Uses browser Local Storage for persistent cart data across page reloads. Ideal for learning DOM manipulation, event handling, and client-side storage.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  
![Built with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellowgreen.svg)  
![Repo size](https://img.shields.io/github/repo-size/kaihere14/-Quickcart)  
![Last commit](https://img.shields.io/github/last-commit/kaihere14/-Quickcart)  
![GitHub stars](https://img.shields.io/github/stars/kaihere14/-Quickcart?style=social)  

---

## ✅ Core Features

- **Product listing** with name and price display  
- **Add/remove items** with single-click interactions  
- **Real-time total calculation**  
- **Local Storage persistence** for cart data  
- **Dark-themed UI** with responsive design  
- **No frameworks required** – pure HTML/CSS/JS  

---

## 📁 Project Structure

```
quickcart/
├── index.html   # Main application interface
├── styles.css   # Dark theme styling
├── script.js    # Cart logic and storage
└── README.md    # Documentation
```

---

## 🚀 Getting Started

1. Clone the repository:  
   ```bash
   git clone https://github.com/kaihere14/-Quickcart.git
   ```

2. Open in browser:  
   ```bash
   cd quickcart
   open index.html
   ```

*No server required – runs natively in modern browsers.*

---

## 🧪 Technical Implementation

- **Data source**: Hardcoded product array in JavaScript  
- **Storage**:  
  - Cart items: `localStorage.getItem('data')`  
  - Total price: `localStorage.getItem('price')`  
- **UI updates**: `setInterval` refreshes display every second  
- **Persistence**: Data remains after page reloads until manually cleared  

---

## 📚 Educational Value

This project demonstrates:  
- Local Storage API for client-side data persistence  
- DOM manipulation with vanilla JS  
- Event-driven programming (click handlers)  
- Responsive design with CSS Flexbox  
- Data binding between JS arrays and UI elements  

---

## 📜 License

Distributed under the [MIT License](LICENSE).  
Permission is granted to use, modify, and distribute freely.

---

Developed with HTML, CSS, and JavaScript.  
Perfect for learning core web development concepts without framework dependencies.