# pradityaaldi

Personal portfolio — SvelteKit 5 + Tailwind CSS + Threlte (Three.js) 3D decorations. Dark theme only. Static-built for GitHub Pages.

## Stack

- **SvelteKit 2** with `@sveltejs/adapter-static` (fully prerendered)
- **Svelte 5** runes
- **Tailwind CSS 3** (cyan accent, custom dark `ink` palette)
- **Threlte 8** + **Three.js** — floating shapes cluster behind the hero
- No UI component libraries — everything hand-built

## Develop

```bash
bun install
bun run dev      # http://localhost:5173
bun run build    # → build/  (static)
bun run preview
```

## Deploy (GitHub Pages, root domain)

Repo intended to be `pradityaaldi.github.io` so the site serves from `/` (no base path).

1. Push to `main`.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds with bun and publishes `build/`.

Using a custom domain? Add a `static/CNAME` file containing the domain.

## Structure

```
src/
  routes/
    +layout.svelte / +layout.ts   # global css + prerender flag
    +page.svelte                  # composes all sections
  lib/
    components/
      Hero.svelte / Hero3D.svelte / Scene.svelte   # hero + 3D
      Projects.svelte  Services.svelte  Contact.svelte
      Dock.svelte      Reveal.svelte                # nav + scroll-reveal
    data/
      projects.ts  site.ts        # content
static/                            # avatar, flags, project images, favicon, .nojekyll
```

Edit content in `src/lib/data/`.
