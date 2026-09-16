# 🎬 MovieExplorer

A responsive movie & TV show explorer built with React. Browse the full TVMaze catalog, search by title, and view details — genres, rating, runtime, and overview — in a modal.

**Live demo:** https://movie-explorer-react-six.vercel.app
**Repo:** https://github.com/MMRSheikh2001/NextLevel/tree/main/movie_explorer_react

## Features

- **Home page** — hero section with a call-to-action into the movie listing page, plus a short "what you can do here" feature grid.
- **Navbar** — brand logo/name, nav links, and a responsive mobile menu (hamburger toggle).
- **Movie listing page** (`/movie`)
  - Search bar that queries TVMaze by title.
  - Falls back to the full show catalog when the search box is cleared.
  - Responsive grid: 1 column on mobile, up to 4 columns on desktop.
  - Loading and error states, plus a "no results" state.
- **Movie cards** — poster, title, release year, and rating badge, with a **See Details** button.
- **Details modal** — backdrop/poster image, rating, release date, genres, overview, and extra metadata (type, status, language, runtime). Closable via the ✕ button or by clicking outside the modal.
- **Footer** — app name, copyright, and a GitHub link.

## Tech stack

- [React 19](https://react.dev/)
- [React Router 8](https://reactrouter.com/) (`createBrowserRouter`, nested layout route)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [lucide-react](https://lucide.dev/) for icons
- [TVMaze API](https://www.tvmaze.com/api) for show data — free, no API key required

## Project structure

\`\`\`
movie_explorer_react/
├── src/
│   ├── services/
│   │   └── movieService.js     # fetch wrappers: getAllMovies, searchMovies, getMovieById
│   ├── components/
│   │   ├── MovieCard.jsx       # poster, title, year, rating, "See Details" button
│   │   └── MovieDetailsModal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movie.jsx           # listing page: search + grid + modal wiring
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── layout/
│   │   └── MainLayout.jsx      # Navbar + <Outlet /> + Footer shell
│   ├── App.jsx                 # router config
│   └── main.jsx
└── vercel.json                 # SPA rewrite so client-side routes work on refresh
\`\`\`

## API integration

All requests go through \`src/services/movieService.js\`, which wraps three TVMaze endpoints:

| Function | Endpoint | Used for |
|---|---|---|
| \`getAllMovies()\` | \`GET /shows\` | Default grid on the listing page |
| \`searchMovies(query)\` | \`GET /search/shows?q=\` | Title search |
| \`getMovieById(id)\` | \`GET /shows/:id\` | Full details shown in the modal |

## Getting started

\`\`\`bash
npm install
npm run dev
\`\`\`

Then open the printed local URL. No environment variables or API keys are needed.

To build for production:

\`\`\`bash
npm run build
npm run preview
\`\`\`

## Deployment

Deployed on [Vercel](https://vercel.com/). \`vercel.json\` rewrites all routes to \`index.html\` so React Router's client-side routes (like \`/movie\`) work correctly on a hard refresh.

## Notes / known limitations

- TVMaze only supports searching by title, not by genre or actor.
- Some shows are missing a poster, rating, or summary in TVMaze's data — the UI falls back to "N/A" / "No Image" rather than breaking.
