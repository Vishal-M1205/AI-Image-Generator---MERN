# 🖼️ AI Image Generator

An AI-powered image generation web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with **JWT authentication**, **bcrypt password hashing**, and **Tailwind CSS** for styling.

<img src="client/public/vite.svg" alt="Screenshot" width="500">

---

## 🚀 Features
- **User Authentication**  
  - Secure sign-up and login using JWT and bcrypt 
  - Passwords stored in hashed form for security
- **AI Image Generation**  
  - Generate images from text prompts using an AI API
  - Download and view generated images
- **Responsive UI**  
  - Styled with Tailwind CSS for a clean and responsive design
- **Protected Routes**  
  - Access to the image generator only for logged-in users

---

## 🛠️ Tech Stack
**Frontend:**
- React.js
- Tailwind CSS
- Axios (API calls)

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token) for authentication
- bcrypt for password hashing

**AI Service:**
- Any AI image generation API (e.g., OpenAI, Stability AI, etc.)

---

## 📂 Project Structure
└── 📁client
    └── 📁public
        ├── logo_icon.svg
        ├── vite.svg
    └── 📁src
        └── 📁assets
            ├── assets.js
            ├── credit_star.svg
            ├── cross_icon.svg
            ├── download_icon.svg
            ├── email_icon.svg
            ├── facebook_icon.svg
            ├── favicon.svg
            ├── instagram_icon.svg
            ├── lock_icon.svg
            ├── logo_icon.svg
            ├── logo.svg
            ├── profile_icon.png
            ├── profile_img_1.png
            ├── profile_img_2.png
            ├── rating_star.svg
            ├── react.svg
            ├── sample_img_1.png
            ├── sample_img_2.png
            ├── star_group.png
            ├── star_icon.svg
            ├── step_icon_1.svg
            ├── step_icon_2.svg
            ├── step_icon_3.svg
            ├── twitter_icon.svg
        └── 📁components
            ├── Desc.jsx
            ├── Footer.jsx
            ├── GenButton.jsx
            ├── Header.jsx
            ├── Login.jsx
            ├── NavBar.jsx
            ├── Steps.jsx
            ├── Testimonial.jsx
        └── 📁context
            ├── AppContext.jsx
        └── 📁pages
            ├── BuyCredit.jsx
            ├── Home.jsx
            ├── Result.jsx
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── main.jsx
    ├── .env
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
```
```
└── 📁server
    └── 📁config
        ├── mongodb.js
    └── 📁controllers
        ├── imageController.js
        ├── userController.js
    └── 📁middlewares
        ├── auth.js
    └── 📁models
        ├── userModel.js
    └── 📁routes
        ├── imageRoute.js
        ├── userRoute.js
    ├── .env
    ├── package-lock.json
    ├── package.json
    └── server.js
```


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Vishal-M1205/
AI-Image-Generator---MERN.git
cd AI-Image-Generator---MERN
## BACKEND
cd server
npm install
npm run dev

## FRONTEND
cd client
npm install
npm run dev


