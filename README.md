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

## GitHub Pages deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the project to a GitHub repository.
2. In GitHub, open Settings > Pages.
3. Set the source to GitHub Actions.
4. Push to the `main` branch to trigger deployment.

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
