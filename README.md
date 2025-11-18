# ISTWA — Animated Film & Interactive Learning Platform

A modern landing page for the **LIBERTÉ animated film** and **waitlist signup**, built to scale into a full studio site including an interactive learning platform and future animated titles.

This landing page includes:
- A waitlist signup form
- Project description and mission
- Information about the first film
- Links to social / updates 
- Responsive layout and production-ready UI

## Tech Stack

### **Frontend**
- **React**
- **TypeScript**
- **Vite** (fast dev server + bundler)

### **Styling & UI**
- **Tailwind CSS**
- **PostCSS**
- **Autoprefixer**
- **Framer Motion** (animations + interactions)
- **Lucide React** (icons)
- **React Icons** (additional icons)

### **Backend / Database**
- **Supabase** (waitlist storage + API)

---

## Installation

```bash
# install dependencies
npm install
```

## Development

```bash
# start dev server
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deployment (Vercel)

1. Push project to GitHub.
2. Go to **vercel.com → New Project**.
3. Import this repository.
4. Vercel auto-detects Vite + React.
5. Deploy.

Every future `git push` automatically updates the live site.

---

## Project Structure

```
root
 ├── src
 │   ├── components          # Landing sections + feature components
 │   │    ├── Hero.tsx
 │   │    ├── About.tsx
 │   │    ├── Waitlist.tsx
 │   │    └── Footer.tsx
 │   ├── components/ui       # Reusable UI (buttons, inputs, forms)
 │   │    ├── Button.tsx
 │   │    └── Input.tsx
 │   ├── lib                 # Supabase client / utils
 │   ├── assets              # Images, logos, icons
 │   ├── hooks               # Custom React hooks
 │   ├── App.css             # App-specific or component-level styles
 │   ├── App.tsx             # Root entry
 │   ├── index.css           # Global CSS / Tailwind overrides
 │   └── main.tsx            # React DOM mount point
 ├── index.html              # HTML template for Vite / React
 └── vite.config.ts          # Vite config
```

> **Note:** Additional component pages like `Educators.tsx`, `FutureVision.tsx`, `Pricing.tsx`, and `InteractiveLearning.tsx` have been created for roadmap expansion but are not yet included in `App.tsx`.

---

## Environment Variables
Create a `.env` file:

```
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key
```

---

## Waitlist Flow
1. User enters email
2. Frontend calls Supabase
3. Supabase inserts entry into `waitlist` table
4. Page confirms signup

---

## Roadmap
- Expand landing page into full ISTWA Studio site
- Add interactive learning platform for history + animation education
- Launch production updates section and film expansions