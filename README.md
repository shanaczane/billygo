# Site Kit: modern redesign in under 2 hours

Next.js 15 + Tailwind 4. Every word, color, link and photo lives in `site.config.ts`.
Sections live in `components/sections.tsx`. Fonts are set in `app/layout.tsx`.

## Setup (do this TONIGHT, not during the task)

```bash
npm install
npm run dev        # http://localhost:3000
```

Push to GitHub, import the repo at vercel.com/new, click Deploy. Confirm you get a live URL.
Tomorrow every `git push` redeploys automatically.

## The 90-minute playbook

| Time | Step |
|---|---|
| 0–15 min | **Audit the old site.** Copy into `site.config.ts`: business name, phone, email, booking/contact link, services, real reviews, FAQs, addresses, licenses. Copy the old page `<title>` and meta description into `seo`. Right-click → copy image address for the logo and photos. |
| 15–25 min | **Pick the look.** Grab the brand color from their logo (browser eyedropper or a color picker extension). Set `colors`. Check text contrast at webaim.org/resources/contrastchecker. Swap the fonts in `app/layout.tsx` if the brand calls for it. |
| 25–60 min | **Fill and trim.** Rewrite the hero headline as the client's one clear promise. Delete sections the business doesn't need (set to `""` / `[]` or remove from `app/page.tsx`). Add one section if they need something specific (gallery, pricing, team). |
| 60–75 min | **Check.** Phone width in DevTools, every link and phone number, `npm run build` passes, no placeholder text left. Run Lighthouse in Chrome DevTools. |
| 75–90 min | **Ship.** `git push`, share the Vercel URL. Write 3–4 lines on what you changed and why. |

## Rules that keep it professional
- Real content only. Never invent ratings, stats or reviews. Missing? Use `[RATING]` and say so.
- Keep their SEO: same title/description, same key page names.
- Every CTA goes to their real booking page, form or phone number.
- Images: hotlinking the client's images works for a demo. For production, download them into `/public`.
