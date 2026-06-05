# PB.DEV Portfolio V2 — Deployment Guide

## Prerequisites & Local Setup

### 1. Requirements
- **Node.js**: Version `18.17.0` or higher (recommended: LTS version `20.x` or `22.x`).
- **Package Manager**: npm (standard) or yarn / pnpm.

### 2. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/pxxad/Portfolio.git
cd Portfolio
npm install
```

### 3. Local Development
Run the local Next.js development server:
```bash
npm run dev
```
The application will launch on [http://localhost:3000](http://localhost:3000).

---

## Production Build & Optimization

Before deploying, always test building the site locally to ensure there are no compilation, TypeScript, or Linting errors.

### 1. Build Command
```bash
npm run build
```
This compile command runs:
- `next build`: Generates the optimized production build.
- Validates Typescript definitions.
- Runs ESLint checkers to verify code quality.

### 2. Local Preview
After a successful build, you can run the production bundle locally:
```bash
npm run start
```
This starts the production server locally at [http://localhost:3000](http://localhost:3000) for final verification.

---

## Deployment Options

### Option A: Vercel (Recommended)

Since this project is built using Next.js (created by Vercel), deploying to Vercel is the easiest, zero-configuration method.

#### Steps via Vercel Web Dashboard:
1. Log in to [Vercel](https://vercel.com).
2. Click **"New Project"**.
3. Import your GitHub repository: `pxxad/Portfolio`.
4. Vercel automatically detects Next.js. Keep default settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
5. Click **"Deploy"**.

#### Steps via Vercel CLI (Command Line):
If you want to deploy straight from your terminal:
```bash
# Install Vercel CLI globally
npm install -g vercel

# Log in to your Vercel account
vercel login

# Link and deploy (follow prompts)
vercel
```

---

### Option B: Netlify

You can also deploy to Netlify using the Next.js Runtime adapter (which Netlify automatically configures).

#### Steps via Netlify Dashboard:
1. Log in to [Netlify](https://netlify.com).
2. Click **"Add new site"** -> **"Import from Git"**.
3. Connect your GitHub account and select `pxxad/Portfolio`.
4. Configure site settings:
   - **Branch to deploy:** `main` (or default branch)
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **"Deploy Portfolio"**.

---

## Environment Variables

Currently, the portfolio does not require any private backend API keys or database connections. However, if you add contact forms or analytics integrations in the future, you should define them as:
- **`NEXT_PUBLIC_ANALYTICS_ID`**: Public analytics tracker keys.
- Add these environment variables in your Vercel or Netlify dashboard under the project's **Environment Variables** settings tab.

---

## Pre-Flight Checklist
Before pushing to production:
- Ensure images under `public/assets/` or external assets load correctly without layout shifts.
- Double-check that all links in `src/data/projects.ts` point to the correct URLs.
- Verify that responsive layouts function correctly across mobile and desktop.
