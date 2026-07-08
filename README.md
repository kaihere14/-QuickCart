# QuickCart

A minimalist shopping cart application built with HTML, CSS, and vanilla JavaScript. Demonstrates client-side data persistence, DOM manipulation, and responsive design.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  
![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellowgreen.svg)  

---

## 🧩 Features

- **Product Management**: Add/remove items with intuitive click interactions  
- **Live Calculations**: Real-time price updates via JavaScript event listeners  
- **Persistent Storage**: Cart state saved in `localStorage` across browser sessions  
- **Responsive Design**: Dark-themed layout using CSS Flexbox  
- **Vanilla JS**: Pure JavaScript implementation (no frameworks or libraries)  

---

## 🛠 Implementation Details

- **Storage**: Uses `localStorage` to persist cart data and price state  
- **UI Updates**: DOM elements refreshed via `setInterval` for live state synchronization  
- **Data Source**: Product catalog defined as a static JavaScript array  
- **Architecture**: Single-page application with client-side rendering  

---

## 📁 Structure

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

*Runs natively in modern browsers – no server required.*

---

## 📜 License

Distributed under the [MIT License](LICENSE).  
Permission is granted to use, modify, and distribute freely.