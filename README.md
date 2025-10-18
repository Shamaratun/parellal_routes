# 🧭 Next.js 15 Routing Exploration Project

This project is an **educational exploration** of advanced Next.js 15 routing concepts — including **nested**, **parallel**, and **intercepting routes**.  
The purpose was to *learn by doing* — experimenting with how routes interact, display in modals, and share layouts.

---

## 📁 Project Overview

**Framework:** Next.js 15.5.6 (Turbopack)  
**Language:** TypeScript  
**Directory Root:** `src/app/dashboard/`

This project demonstrates:
- ✅ Dynamic segments like `[id]`, `[admission_id]`
- ✅ Intercepting routes using `@modal`
- ✅ Parallel routing using `(.)folder` syntax
- ✅ Default route handling with `default.tsx`
- ✅ Layout composition and shared UI

---

## 🧩 Folder Structure

src/
└── app/
├── dashboard/
│ ├── @modal/ → Intercepting modal routes (overlay)
│ ├── (.)patient-profile[id]/ → Parallel route for patient profiles
│ │ ├── [admission_id]/ → Nested route (specific admission)
│ │ │ ├── page.tsx → Admission details view
│ │ │ └── default.tsx → Fallback if no admission selected
│ │ ├── page.tsx → Displays selected patient by ID
│ │ └── default.tsx → “Select a patient” fallback
│ ├── patient-profile/ → Standard route for all patient data
│ │ ├── layout.tsx → Layout for profile area
│ │ ├── page.tsx → Main content for patient section
│ │ └── default.tsx → Fallback screen
│ └── page.tsx / layout.tsx → Dashboard root layout
├── home2/ → Experimental or demo folder
├── layout.tsx → App-wide layout
├── default.tsx → Global fallback page
├── favicon.ico → App icon
├── globals.css → Global styles
├── .env / .env.local → Environment variables

markdown
Copy code

---

## 🧠 Key Learning Concepts

### 🧩 1. Parallel Routing
- Achieved using folders like `(.)patient-profile\[id]`.
- Enables multiple parts of the UI to update independently while sharing layout.
- Great for dashboards (side panel + details view combo).

### 🌀 2. Intercepting Routes with `@modal`
- `@modal` lets you show routes **as modals** over the current page.
- Example: opening a patient’s record *without leaving the dashboard*.
- The route `/dashboard/@modal/patient-profile/[id]` displays as a modal overlay.

### 🔢 3. Dynamic Segments
- `[id]` and `[admission_id]` let you grab data from the URL.
- Used here to simulate patient and admission identifiers.

### 🧱 4. Default Routes
- Each folder can have a `default.tsx` — it’s a *placeholder or fallback view*.
- Used when a subroute (like `[id]` or `[admission_id]`) isn’t active.

### ⚙️ 5. Client Components
- Hooks like `useState` and `useRouter` only work in `"use client"` components.
- Important to mark modal and interactive components as client-side.

---

## 🎯 Visual Explanation

Here’s a simple diagram showing how these parts interact:

+---------------------------------------------------------+
| /dashboard (layout.tsx + page.tsx) |
| |
| ├── patient-profile (page.tsx) |
| │ ├── default.tsx → "Select a patient" |
| │ ├── [id]/page.tsx → Shows patient details |
| │ │ ├── default.tsx → "No admission selected" |
| │ │ └── [admission_id]/page.tsx → Admission |
| │ ⤴ |
| ├── @modal/patient-profile/[id]/page.tsx |
| │ → Intercepted modal overlay (client-side) |
| |
+---------------------------------------------------------+

yaml
Copy code

**How the flow works:**
1. Visiting `/dashboard/patient-profile` → shows main patient section.  
2. Selecting a patient (`/dashboard/patient-profile/123`) → loads `[id]/page.tsx`.  
3. Clicking an admission → `/dashboard/patient-profile/123/86` (nested route).  
4. Opening modal → `/dashboard/@modal/patient-profile/123` shows overlay.  
5. If no `[id]` or `[admission_id]`, default.tsx appears as fallback.

---

## ⚙️ Technical Fixes & Lessons Learned

| Problem | Cause | Fix |
|----------|--------|-----|
| ❌ `useState` / `useRouter` hook errors | File not marked as Client Component | Add `"use client"` at the top |
| ❌ 404 on `/photo/3` | Missing `page.tsx` in `[id]` folder | Add a valid `page.tsx` |
| ❌ 500 runtime errors | Default export not a React component | Ensure each file exports a valid component |
| ⚠️ Root mismatch warning | Multiple lockfiles detected | Remove unnecessary `pnpm-lock.yaml` or `package-lock.json` |

---

## 💡 Example Routes You Tested

| Route | Purpose |
|-------|----------|
| `/dashboard` | Main dashboard layout |
| `/dashboard/patient-profile` | Patient section root |
| `/dashboard/patient-profile/1` | Patient details (ID = 1) |
| `/dashboard/patient-profile/1/23` | Admission details (nested) |
| `/dashboard/@modal/patient-profile/1` | Modal overlay for same patient |

---

## 🎓 Why This Project Matters

This project helps you:
- Understand **file-based routing depth** in Next.js 15.  
- Learn how layouts, modals, and fallback routes connect.  
- Debug real-world routing errors step by step.  
- Build confidence for full dashboard-style apps.

---

## 🧑‍💻 Author

**Shamaratun Jannat Meme**  
Exploring advanced **Next.js 15 routing** through structured, hands-on learning.  
Focus: Intercepting routes, nested dynamics, and modular dashboards.

---

## 🪄 Next Steps

✅ Add real data (mock API or DB)  
✅ Animate modal transitions  
✅ Try loading state in `default.tsx`  
✅ Add `generateStaticParams()` for SSG demos  

---

✨ *“Learning routing deeply is learning how users navigate your logic.”*  
— Keep exploring, step by step.