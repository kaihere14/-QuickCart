# QuickCart

A minimalist shopping cart application built with HTML, CSS, and vanilla JavaScript. Demonstrates client-side data persistence, DOM manipulation, and responsive design.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  
![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellowgreen.svg)  

---

## 🧩 Key Features

- **Product Management**: Add/remove items via click interactions  
- **Dynamic Calculations**: Real-time price updates using JavaScript  
- **Persistent Storage**: Cart state saved in `localStorage` across sessions  
- **Responsive Design**: Dark-themed layout with CSS Flexbox  
- **Vanilla JS**: Pure JavaScript implementation (no frameworks)  

---

## 🧪 Technical Highlights

- **Storage Mechanism**:  
  - Cart data: `localStorage.getItem('data')`  
  - Price state: `localStorage.getItem('price')`  
- **UI Updates**: DOM refreshed via `setInterval` for live updates  
- **Data Source**: Product catalog defined as a hardcoded JavaScript array  

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

## 📜 License

Distributed under the [MIT License](LICENSE).  
Permission is granted to use, modify, and distribute freely.