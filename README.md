Here’s a **clean, polished README (GitHub-ready + professional look)** 👇

---

# 🎵 musicBackend

A minimal and scalable **Node.js backend** for a music platform supporting authentication, music uploads, and album management.

---

## 🚀 Features

* 🔐 JWT-based authentication (Register / Login / Logout)
* 👤 Role-based access (`user`, `artist`)
* 🎧 Music upload using Multer
* ☁️ File storage via ImageKit
* 🗄️ MongoDB integration with Mongoose
* 🛡️ Protected routes with middleware

---

## 🧱 Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB + Mongoose
* **Auth:** JWT (JSON Web Tokens)
* **File Upload:** Multer
* **Media CDN:** ImageKit

---

## ⚙️ Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start server

```bash
node src/server.js
```

### 🌐 Server URL

```txt
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
```

---

## 📡 API Endpoints

### 🔐 Auth Routes

* `POST /api/auth/register` → Register (user / artist)
* `POST /api/auth/login` → Login (returns token cookie)
* `POST /api/auth/logout` → Logout

### 🎵 Music Routes

* `POST /api/music/upload` → Upload music (**artist only**)
* `GET /api/music/all` → Fetch all music

### 📀 Album Routes

* `GET /api/music/album/all` → Fetch all albums
* `GET /api/music/album/:albumId` → Get album by ID

---

## 🧪 API Usage (Postman)

For uploading music:

* Use **form-data**
* Key: `title` → Type: Text
* Key: `file` → Type: File
* Ensure user is logged in (token cookie required)

---

## 📦 Sample Requests

### 🎤 Register (Artist)

```json
{
  "name": "Arijit Singh",
  "email": "arijit@example.com",
  "password": "12345678",
  "role": "artist"
}
```

### 🔑 Login

```json
{
  "email": "arijit@example.com",
  "password": "12345678"
}
```

---

## 📝 Notes

* 🔐 Passwords should be **hashed** before storing
* 📁 Uploaded files are stored via ImageKit CDN
* 🍪 Authentication uses **HTTP-only cookies**
* 🧪 Designed for learning + interview-ready backend projects

---

## 💡 Future Improvements

* 🎶 Streaming support
* ❤️ Likes & playlists
* 🔍 Search & filters
* 📊 Admin dashboard

---

