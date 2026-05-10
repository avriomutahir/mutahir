# Personal Portfolio Website

A React + Vite portfolio website prepared for GitHub Pages hosting and later connection to a personal domain.

## Included sections

- Intro
- Work History
- Resume
- Portfolio History
- About Us
- Contact call-to-action

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment (branch-based)

This project is configured to publish the `dist` build output to the `gh-pages` branch.

1. Push the project to a GitHub repository.
2. Run `npm run deploy`.
3. In GitHub, open Settings > Pages.
4. Set Source to `Deploy from a branch`.
5. Set Branch to `gh-pages` and folder to `/ (root)`.
6. Save and open your GitHub Pages URL.

## Custom domain setup

To use a personal domain on GitHub Pages:

1. Create a file named `public/CNAME`.
2. Put your domain in that file, for example `portfolio.yourdomain.com`.
3. In GitHub Pages settings, enter the same custom domain.
4. Update your DNS provider with the GitHub Pages DNS records for your domain.

## Notes

- The current content is placeholder copy and should be replaced with your real bio, work history, and portfolio details.
- The site uses a three-second loading screen before showing the main page.
- The Vite base path is set to `./` so the site can work both on the GitHub Pages project URL and a custom domain.
