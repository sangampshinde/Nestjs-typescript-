# NEST JS
NestJS is a framework for building server-side applications using Node.js, built on top of Express.js (or optionally Fastify) and heavily inspired by Angular’s architecture — it uses modules, controllers, providers (services), and dependency injection to create highly testable, structured, and reusable code.

# NEST JS SETUP AND INSTALLATIONS

Prerequisites:
✅ Node.js (v16.x or later)
✅ npm (comes with Node.js) or yarn
✅ Optional: Git for version control

## Step 1: Install Nest CLI
npm install -g @nestjs/cli

# CHECK NEST VERSION
nest --version

# CREATING AND RUNNING NEST JS PROJECT
nest new project_name

# TO RUN NEST JS PROJECT
npm run start:dev

✅ Visit http://localhost:3000 — You’ll see: "Hello World!"

# PROJECT STRECTURE

my-nest-app/
├── src/
│   ├── app.controller.ts       # Handles HTTP requests
│   ├── app.service.ts          # Business logic
│   ├── app.module.ts           # Root module
│   └── main.ts                 # App entry point
├── test/                       # Auto-generated test files
├── package.json
├── tsconfig.json
└── ...
