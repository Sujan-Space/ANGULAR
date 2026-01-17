# Angular & Node.js Projects Repository

This repository contains **multiple Angular projects and related Node.js setups**, organized into separate folders.  
Each folder is a **standalone project** with its own dependencies and configuration.

---

## 📌 Prerequisites (Required for ALL Projects)

Make sure the following are installed **once globally** on your system:

### 1️⃣ Node.js (LTS only)
- Recommended: **Node.js 18.x or 20.x**
- ❌ Node.js 22 is NOT supported by Angular

Download from: https://nodejs.org

Verify:
```bash
node -v
npm -v
```

### 2️⃣ Angular CLI (Global)

```bash
npm install -g @angular/cli
```

Verify:

```bash
ng version
```

---

## 📁 Repository Structure

```text
ANGULAR/
├── PIPES/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── README.md
│
├── PROJECT_2/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── README.md
│
├── PROJECT_3/
│   ├── src/
│   ├── package.json
│   └── README.md
│
└── README.md   (this file)
```

🔹 Each folder is an independent project  
🔹 Each project has its own `package.json`  
🔹 Dependencies are NOT shared

---

## 🚀 How to Run Any Project

### Step 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
```

### Step 2️⃣ Navigate into a Project Folder

Example:

```bash
cd ANGULAR/PIPES
```

⚠️ Always `cd` into the folder that contains `package.json`

### Step 3️⃣ Install Project Dependencies

```bash
npm install
```

This installs the required `node_modules` for that specific project only.

### Step 4️⃣ Run the Project

**For Angular projects:**

```bash
ng serve
```

Open: `http://localhost:4200/`

**For Node-only projects (if any):**

```bash
npm start
```

or

```bash
node index.js
```

(Refer to the project's own README if present.)

---

## 🔁 Important Rule (Very Important)

**You MUST run `npm install` inside each project folder**

Even though:
- Node.js is global
- Angular CLI is global

Each project has its own dependencies and versions.

---

## 🛠️ Common Issues & Solutions

### ❌ `Could not find @angular-devkit/build-angular`

✔ **Fix:**

```bash
npm install
```

### ❌ `lmdb`, `node-gyp`, or native build errors

✔ **Cause:** Unsupported Node version  
✔ **Fix:**
- Use Node 18 or 20 (LTS)
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### ❌ `EPERM: operation not permitted` (Windows)

✔ **Fix:**
- Close editors & terminals
- Delete `node_modules` manually
- Run terminal as Administrator (if needed)

---

## 📦 Build Any Angular Project

```bash
ng build
```

Build output will be in:

```text
dist/
```

---

## 📚 Notes

- `node_modules` is not committed to GitHub
- Always run `npm install` after cloning
- Each folder is independent
- Use Node LTS only for Angular projects

---

## 👤 Author

**Sujan Kumar**

---

## 📜 License

This repository is intended for learning, experimentation, and development purposes.
