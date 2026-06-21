# 💱 Real-Time Currency Converter

Currency Converter UI Preview
<img width="1919" height="887" alt="image" src="https://github.com/user-attachments/assets/3d737f64-2b72-407b-a9f3-febd068c4479" />

A responsive web utility built with vanilla JavaScript to perform instant currency conversions using live exchange rates. This project highlights my transition from basic coding to handling live data streams and structured application design.

---

## 🛠️ Core JS Concepts Applied

* **Dynamic DOM Manipulation:** Programmatically generating, appending, and updating node elements based on configuration data.
* **Asynchronous Pipelines:** Using the `Fetch API` alongside `async/await` blocks and `try/catch` handlers to fetch live market rates securely.
* **Decoupled Architecture:** Separating runtime logic (`script.js`) from large metadata dictionary constants (`codes.js`) to keep code modular and clean.
* **Event Architecture:** Managing application initialization via window `load` events and tracking interactive state updates across dropdown inputs.

---

## 🚀 Live Demo

📹 Project Demonstration Video:<br>
LinkedIn Post: https://www.linkedin.com/posts/suraj-maurya-638829251_javascript-webdevelopment-frontenddevelopment-ugcPost-7474265511975866368-eM_V/

---

## 🗂️ Project Anatomy

```text
├── index.html     # Semantic UI skeleton structure
├── style.css      # Dark-glassmorphic styling configurations
├── codes.js       # Externalized country-to-currency code data module
└── script.js      # Main asynchronous runtime engine
```

---

## ⚙️ Run Locally

```bash
git clone https://github.com/surajm-3290/currencyConverter.git
cd currencyConverter
```

Open `index.html` in your browser.

---

##👨‍💻 Author

**Suraj Maurya**<br>
LinkedIn: https://www.linkedin.com/in/suraj-maurya-638829251/

⭐ If you found this project useful, consider giving it a star.
