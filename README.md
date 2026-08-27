# ⚡ Ivan Ezekiel — Neo-Brutalist Full-Stack Developer Portfolio

An interactive, high-performance neo-brutalist bento portfolio crafted with **React**, **Three.js**, **Vite**, and **Vanilla CSS**. Features responsive 3D interactive physics backgrounds, dynamic theme & accent engines, tactile Web Audio sound synthesis, live scrollspy navigation, and centralized data configuration.

---

## 🎨 Design Philosophy & Architecture

This portfolio combines **brutalist precision** with **cybernetic minimalism**:

- **Neo-Brutalist Typography & Layout**: Built with high-contrast typefaces (*Syne*, *Space Grotesk*, and *JetBrains Mono*), sharp geometric borders, modular bento grids, and technical telemetry UI badges.
- **Interactive Three.js Canvas**:
  - **Dynamic Particle Constellation**: Reactive particle network that dynamically repels around cursor movement, interconnected with floating wireframe octahedrons and rotating polyhedra.
  - **3D Floating Hero Core**: Geometric wireframe accent rendering at the top of the hero container.
  - **3D Blueprint Architecture & Wireframe Globe**: Dynamic 3D visualizers across the project and connect sections.
- **Dynamic Theming & Accent Engine**: Seamless Light/Dark mode transitions with a custom palette switcher (Orange, Green, Blue, Amber, Purple, Red) powered by unified HSL CSS design tokens.
- **Web Audio API Synthesizer**: Pure browser-synthesized mechanical keyboard sound effects on interactions (no external audio assets required).
- **Zero-Friction Configuration**: All personal information, career trajectory, project records, skills, and links are decoupled into a single configuration file (`main/portfolio.config.js`).

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework & Routing** | React 19, React Router v7, Vite 8 |
| **3D & Graphics** | Three.js (WebGL Canvas Visualizations) |
| **Styling** | Pure Vanilla CSS (CSS Variables, Grid, Flexbox, Glassmorphism) |
| **Audio** | Web Audio API (Synthesized Mechanical Key Sounds) |
| **Deployment** | Vercel (SPA route rewrites via `vercel.json`) |

---

## 🚀 How to Clone & Customize (Avoid Remote Push Errors)

> [!IMPORTANT]
> If you clone this repository directly with `git clone https://github.com/IvanEzkl/Ivan---Portfolio.git`, your local Git remote `origin` will point to **Ivan's repository**. Attempting to `git push` will result in a **`403 Permission Denied`** error because you do not have write access to this upstream repo.
>
> Follow either **Method 1 (Recommended)** or **Method 2** below to create your own independent repository.

---

### Method 1: Fork the Repository (Recommended)

1. **Fork this repository**: Click the **[Fork]** button at the top right of this GitHub page to create a copy under your own GitHub account.
2. **Clone your personal fork**:
   ```bash
   git clone https://github.com/<YOUR-GITHUB-USERNAME>/Ivan---Portfolio.git my-portfolio
   cd my-portfolio
   ```
3. **Install dependencies & start developing**:
   ```bash
   npm install
   npm run dev
   ```
4. Now you can `git push` directly to your own GitHub repository without any permission errors!

---

### Method 2: Direct Clone with Fresh Git Initialization

If you want to start completely fresh without fork history:

1. **Clone the project locally**:
   ```bash
   git clone https://github.com/IvanEzkl/Ivan---Portfolio.git my-portfolio
   cd my-portfolio
   ```

2. **Remove the original `.git` remote tracking**:
   - **Windows (Command Prompt)**:
     ```cmd
     rmdir /s /q .git
     ```
   - **Windows (PowerShell)**:
     ```powershell
     Remove-Item -Recurse -Force .git
     ```
   - **macOS / Linux**:
     ```bash
     rm -rf .git
     ```

3. **Initialize your own fresh Git repository**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit from portfolio template"
   git branch -M main
   ```

4. **Link to your newly created GitHub repository**:
   ```bash
   git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-NEW-REPO-NAME>.git
   git push -u origin main
   ```

---

## ⚙️ Project Setup & Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The Vite development server will spin up locally (typically at `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
Generates production-ready, minified assets into `main/dist/`.

---

## 📝 Customizing for Your Own Portfolio

All content is structured to be easily customized without digging through complex JSX components:

1. **Update Personal Data**: Open [`main/portfolio.config.js`](./main/portfolio.config.js) and update:
   - `name`, `roles` (typewriter text), and `bio`
   - `trajectory` (Experience, Education, Organizations)
   - `projects` (Titles, tags, live URLs, GitHub repos, and screenshots)
   - `skills` & `tools`
   - `socialLinks` & contact endpoints
2. **Replace Resume**: Add your own resume PDF in the root / `main/public/` directory and update `resumeUrl` in `portfolio.config.js`.
3. **Customize Accent Colors**: Modify the default palettes or HSL CSS tokens in `portfolio.config.js` and [`main/src/index.css`](./main/src/index.css).

---

## 🌐 Deployment to Vercel

This repository includes a root `vercel.json` configured for SPA client-side routing:

1. Import your GitHub repository on [Vercel](https://vercel.com).
2. The project will automatically detect the build settings:
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `main/dist`
3. Click **Deploy**.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Connect with Ivan

- **GitHub**: [@IvanEzkl](https://github.com/IvanEzkl)
- **LinkedIn**: [Ivan Ezekiel Regodon](https://www.linkedin.com/in/ivan-ezekiel-regodon-082a67379/)
- **Email**: [regodonivanezekiel@gmail.com](mailto:regodonivanezekiel@gmail.com)
- **Location**: Quezon City, Metro Manila, Philippines
