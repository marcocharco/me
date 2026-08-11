# Marco Chen — Portfolio

A small static portfolio site. React, Babel, and Tailwind are all loaded from CDNs, so there's no build step or dependencies to install. Project preview images live in `assets/` so they load from this repo instead of remote hosts.

## Structure

```
.
├── index.html        # Page shell: CDN scripts, Tailwind config, mounts the app
├── css/
│   └── styles.css    # Custom styles (link hovers, selection colors)
├── js/
│   └── app.js        # React app (Hero, Projects, Experience, App)
└── assets/           # Static files (images, resume PDF)
```

## Running locally

Because `js/app.js` is loaded by Babel over the network, the site needs to be served over HTTP (opening `index.html` directly via `file://` won't work). Any static server works, e.g.:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Notes

- Add your resume as `assets/Marco_Chen_Resume.pdf` (the Resume link points there when enabled).
- This is intentionally build-less. If the site grows, consider moving to a bundler (e.g. Vite) for component splitting and precompiled Tailwind.
