# Tasks App - Nuxt Crash Course

This repository contains source code created by following along with the
[_Syntax.fm_](https://www.youtube.com/@syntaxfm) Nuxt Crash Course on YouTube.

## 🎥 About the Video

In the video that inspired this project, CJ walks through how to set up a Nuxt
application from scratch — covering everything from layouts and pages to API
routes and data handling.

- 🌐 Routing, page creation, and layout design
- 🗃️ Interacting with the database (read & create operations)
- 🚦 API routes with loading and error state management
- 🏗️ Organizing the app structure and server-side functionality

📺 [Watch the full video here](https://www.youtube.com/watch?v=5oKpoqmUj64)

## 🧰 Tech Stack

- [Nuxt](https://nuxt.com/), a fullstack framework for
  [Vue.js](https://vuejs.org/)
- [Drizzle](https://orm.drizzle.team/), database ORM to connect to SQLite
- _Optional:_ [Vue DevTools](https://devtools.vuejs.org/) for debugging

Look at the
[Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to
learn more.

This project has some additional tools setup:

- [Pnpm](https://pnpm.io/) as the package manager
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io) for code
  quality

## 🚀 Getting Started

### 🛠️ Project Setup

Install dependencies and prepare the environment:

```bash
pnpm install
cp .env.example .env
```

#### 🗄️ Database Setup

Create the local database and apply migrations:

```bash
touch local.db
pnpm drizzle-kit migrate
```

### 🧪 Development

Start the development server at [http://localhost:3000](http://localhost:3000):

```bash
pnpm run dev
```

### Production

Build the application for production and preview it:

```bash
pnpm run build
pnpm run preview
```

Check out the
[deployment documentation](https://nuxt.com/docs/getting-started/deployment) for
more information.

## 🧭 Next Steps

- [ ] ✏️ **Edit a Task Title**  
       Update the title of a task using an input field or edit form.
- [ ] ✅ **Complete a Task**  
       Mark a task as done by checking its checkbox or using a toggle.
- [ ] 🗑️ **Delete a Task**  
       Remove a task by clicking the trash icon or delete button.
