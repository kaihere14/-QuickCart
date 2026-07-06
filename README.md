# QuickCart

A lightweight shopping cart application built with HTML, CSS, and vanilla JavaScript. Demonstrates client-side data persistence, DOM manipulation, and responsive design.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  
![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellowgreen.svg)  

---

## 🧩 Key Features

- **Product Management**: Add/remove items with click interactions  
- **Dynamic Calculations**: Real-time total price updates  
- **Persistent Storage**: Cart data saved in `localStorage` across sessions  
- **Responsive UI**: Dark-themed layout using CSS Flexbox  
- **Vanilla JS**: No external libraries – pure JavaScript implementation  

---

## 🧪 Technical Implementation

- **Data Storage**:  
  - Cart contents: `localStorage.getItem('data')`  
  - Total price: `localStorage.getItem('price')`  
- **UI Updates**: Display refreshed every second via `setInterval`  
- **Product Data**: Hardcoded array in JavaScript  

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
   open index.html  # or double-click index.html in file explorer
   ```

*No server required – runs natively in modern browsers.*

---

## 📚 Learning Objectives

This project demonstrates:  
- Local Storage API for client-side persistence  
- DOM manipulation with vanilla JavaScript  
- Event-driven programming (click handlers)  
- Responsive layout with CSS Flexbox  
- Data binding between arrays and UI elements  

---

## 📜 License

Distributed under the [MIT License](LICENSE).  
Permission is granted to use, modify, and distribute freely.