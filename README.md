# 🩺 Healthcare Landing Page + Patient Form

A responsive React-based healthcare landing page designed to provide patients with an easy way to book consultations. The application features a clean modern UI, accessibility-first development, and a patient intake form with real-time validation.

This project is built for healthcare providers, clinics, and telehealth startups who need a lightweight, scalable, and secure way to collect patient information online. It matters because it bridges accessibility gaps in healthcare, offering patients a smooth, secure, and mobile-friendly experience.

## Features

Modern responsive landing page (Hero, About, Services, Contact, Footer)

Patient intake form with real-time validation

Accessibility compliance (labels, ARIA, keyboard navigation)

Data persistence with Supabase (secure storage) + localStorage fallback

Confirmation modal on submission (Framer Motion animations)

Dark/Light mode toggle

Optimized for performance (Lighthouse-tested)

Deployed on Vercel for scalability

## Tech Stack

### Frontend

React (with Vite)

Tailwind CSS (UI styling & theming)

Framer Motion (animations & transitions)

### Backend / Database

Supabase (PostgreSQL, authentication, secure API access)

### Deployment

Vercel (scalable hosting, preview deployments)

### Testing

Jest + React Testing Library (unit & integration tests)

Lighthouse (performance & accessibility audits)

### Tooling

ESLint + Prettier (code quality & formatting)

GitHub Actions (CI/CD for tests and linting)

## AI Integration Strategy

This project is AI-native: development is guided and accelerated with the help of AI IDE copilots (Cursor, Windsurf, Replit Ghostwriter). Here’s how AI fits into the workflow:

🔹 Code Generation

Use AI IDE prompts to scaffold components (Header, Hero, PatientForm, etc.) based on the project plan.

Generate utility functions (e.g., localStorage helpers, Supabase client).

Speed up repetitive tasks like responsive layouts, form validation, and dark/light mode toggles.

🔹 Testing

AI prompts generate unit tests for PatientForm (validation, submission) and Modal.

Context-aware AI queries will propose integration tests with Supabase.

Automated GitHub Action workflows suggested by AI ensure tests run on every push.

🔹 Documentation

Inline docstrings and comments are drafted with AI, keeping functions self-explanatory.

README.md, CONTRIBUTING.md, and API usage examples are generated/maintained with AI.

AI-assisted Markdown formatting ensures clean, professional project docs.

🔹 Context-Aware Techniques

File tree snapshots and API schemas (Supabase tables) are fed into the AI to generate accurate code and prevent mismatch.

Git diffs can be provided to AI so it suggests meaningful commit messages or refactors.

Accessibility audit reports (Lighthouse JSON) are given to AI for targeted improvements.
