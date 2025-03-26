# tangle-ar.app
## website for the Tangle AR App, built with astro, tailwind CSS, and mdx

## Pages

- **Features**: Overview of Tangle AR capabilities and use cases
- **Sign Up**: Create an account to start using Tangle AR
- **FAQ**: Common questions and answers about the platform
- **Changelog**: Latest updates and improvements

### Adding changelog entries

All of the changelog entries are stored in a single `./src/pages/changelog-page.mdx` file (inspired by typical plaintext `CHANGELOG` files).

Each changelog entry should be separated by a horizontal rule (`---`) and should include an `<h2>` with a date, specified as an [MDX annotation](https://github.com/bradlc/mdx-annotations):

```md
---

![](@/images/your-screenshot.png)

## Commands

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start local dev server at `localhost:4321`        |
| `npm run build`        | Build your production site to `./dist/`           |
| `npm run preview`      | Preview your build locally, before deploying      |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro --help` | Get help using the Astro CLI                      |
| `npm run format`       | Format code with [Prettier](https://prettier.io/) |
| `npm run clean`        | Remove `node_modules` and build output            |


## My new changelog entry {{ date: '2023-04-06T00:00Z' }}

Your content...
```

## Development

*Recommended VS Code Plugins:*
- astro (includes support for typescript)
- tailwind css
- mdx

*To run locally:*

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## Deployment

This site is deployed on GitHub Pages. 

*To deploy:*

1. Push changes to the main branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://<USERNAME>.github.io/tangle-astro` (dev) and `https://tangle-ar.app/` (production)


