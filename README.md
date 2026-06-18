# 💱 Real-Time Currency Converter

![Currency Converter UI Preview]
<img width="1919" height="887" alt="image" src="https://github.com/user-attachments/assets/3d737f64-2b72-407b-a9f3-febd068c4479" />

A responsive web utility built with vanilla JavaScript to perform instant currency conversions using live exchange rates. This project highlights my transition from basic coding to handling live data streams and structured application design.

---

## 🛠️ Core JS Concepts Applied

* **Dynamic DOM Manipulation:** Programmatically generating, appending, and updating node elements based on configuration data.
* **Asynchronous Pipelines:** Using the `Fetch API` alongside `async/await` blocks and `try/catch` handlers to fetch live market rates securely.
* **Decoupled Architecture:** Separating runtime logic (`script.js`) from large metadata dictionary constants (`codes.js`) to keep code modular and clean.
* **Event Architecture:** Managing application initialization via window `load` events and tracking interactive state updates across dropdown inputs.

---

## 🎨 Design Tokens

| Component | UI Property | Hex Value |
| :--- | :--- | :--- |
| **Canvas Base** | Deep Radial Slate | `#0F172A` |
| **App Container** | Obsidian Glass Card | `#1E293B` |
| **Form Surfaces** | Interactive Inputs | `#334155` |
| **Main Accent** | Vibrant Indigo Button | `#6366F1` |

---

## 🗂️ Project Anatomy

```text
├── index.html     # Semantic UI skeleton structure
├── style.css      # Dark-glassmorphic styling configurations
├── codes.js       # Externalized country-to-currency code data module
└── script.js      # Main asynchronous runtime engine
