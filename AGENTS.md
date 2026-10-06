# ARCORA — Base44 notes

## What this project is

A static-feeling marketing site for a fictional luxury architecture studio. It was built from the
brief in `README.md`; the repository originally contained no application code.

- `client/` — Vite + React + Tailwind front end (routes in `client/src/App.jsx`).
- `server/` — small Express API holding the contact and newsletter form submissions.
- `docker-compose.base44.yml` — the development environment used by Base44.

## Running it

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

The site is served on host port 3000. `server/` is only reachable through the Vite dev-server proxy
at `/api` (see `client/vite.config.js`), so the browser stays on a single origin — no CORS setup is
needed.

## Non-obvious details

- Dependencies are installed **at container start** into anonymous volumes
  (`/app/client/node_modules`, `/app/server/node_modules`), because the source directories are
  bind-mounted from the host. Changing `package.json` therefore only needs a service restart, not a
  rebuild — but the first request after a restart can be slow while npm runs.
- `VITE` dev-server host checking is disabled with `server.allowedHosts: true` in
  `client/vite.config.js`, because the preview is served through a rotating proxy hostname.
  `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` is also passed through from compose.
- Form submissions are appended to JSON files in the `arcora-data` named volume
  (`inquiries.json`, `subscribers.json`). Inspect them with:
  `docker compose -f docker-compose.base44.yml exec api cat /data/inquiries.json`
- Imagery is hot-linked from Unsplash at request time; there are no local image assets and no
  credentials required. If the site is deployed somewhere without outbound internet, images will
  not load.
- There are no external services and no secrets. `.base44/environment.json` intentionally declares
  an empty `secrets` list.

## Verifying

- Front end renders: `curl -s http://localhost:3000/ | head`
- API is reachable through the proxy: `curl -s http://localhost:3000/api/health`
- Contact form: `curl -s -X POST http://localhost:3000/api/inquiries -H 'Content-Type: application/json' -d '{"name":"Test","email":"test@example.com","message":"Hello"}'`

## Project detail pages

Project data lives in `client/src/data/projects.js`. Slugs there must match the `/projects/:slug`
route; unknown slugs redirect to `/projects`.
