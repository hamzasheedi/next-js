### Project Setup & Folder Structure in Next.js  

#### 1️⃣ Install Next.js  
Run the command to create a new Next.js project:  
```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev  # Start the development server


2️⃣ Folder Structure (App Router)
bash

 ├── /app                  # App Router (Next.js 13+)
 │    ├── /page.tsx        # Home page
 │    ├── /about/page.tsx  # About page
 │    ├── /layout.tsx      # Root layout
 │    ├── /loading.tsx     # Loading UI
 │    ├── /api/route.ts    # API routes
 ├── /public               # Static assets
 ├── /components           # Reusable components
 ├── /styles               # Global styles
 ├── next.config.js        # Next.js config
 ├── package.json          # Dependencies
 ├── tsconfig.json         # TypeScript config



3️⃣ Key Concepts
✅ App Router (app/) – Uses React Server Components.
✅ API Routes (app/api/route.ts) – Backend logic inside Next.js.
✅ Layouts (app/layout.tsx) – Shared UI for all pages.
✅ Static Assets (public/) – Store images, fonts, etc.
