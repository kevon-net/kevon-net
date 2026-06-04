# Kevon — Full-Stack Developer

Production-focused developer building scalable, high-performance web applications.

🌐 Live: https://kevon.net

---

## 🧭 Overview

This repository contains my personal website — designed as a **central entry point for evaluating my work**.

Rather than a static portfolio, this project reflects how I approach:

* System design
* Performance optimization
* Scalable frontend architecture
* End-to-end product development

---

## 🏗️ Architecture Mindset

This project is intentionally built using patterns I apply in production systems:

* Modular, domain-oriented structure (not component chaos)
* Clear separation between UI, state, and data layers
* Server-first data fetching strategy (App Router)
* Minimal client-side overhead by default

The goal is not complexity — but **controlled, intentional structure**.

---

## ⚙️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **UI:** Mantine + Tailwind
* **State:** Zustand
* **Database:** PostgreSQL (Prisma ORM)
* **Tooling:** pnpm, ESLint, Prettier
* **Deployment:** Vercel

---

## ⚡ Engineering Highlights

Selected decisions that reflect my development approach:

* Implemented **request deduplication** to eliminate redundant API calls under concurrent rendering
* Used **lazy initialization** for non-critical services to reduce initial load cost
* Moved filtering/sorting logic to the **database layer** to avoid unnecessary client computation
* Structured components for **reusability without over-abstraction**
* Optimized rendering boundaries to reduce unnecessary re-renders

---

## 📂 Project Structure

```bash
.
├── app/            # Route handlers and server components
├── components/     # Reusable UI building blocks
├── features/       # Domain-specific modules
├── lib/            # Shared utilities and services
├── prisma/         # Database schema and queries
└── public/         # Static assets
```

---

## 🚀 Running Locally

```bash
git clone https://github.com/kevon-net/kevon-net.git
cd kevon-net

pnpm install
pnpm dev
```

---

## 🌍 Deployment

Hosted on Vercel with optimized build and edge delivery.

---

## 🧠 Philosophy

I focus on:

* Building **systems that scale**, not just interfaces
* Treating **performance as a core feature**
* Writing code that is **easy to reason about and extend**
* Avoiding unnecessary abstraction unless it provides clear value

---

## 🤝 Contact

* Portfolio: https://kevon.net
* GitHub: https://github.com/kevon-net
* LinkedIn: https://linkedin.com/in/kevon-net
