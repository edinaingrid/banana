# My Portfolio — Jekyll + GitHub Pages

## Editing your content

**You only need to edit ONE file for all content changes:**

```
_data/site.yml
```

Open it and update:
- Your name, role, email, GitHub, LinkedIn
- Your tagline and bio
- Stats (years of experience, projects, etc.)
- Technologies list
- Skills with percentage levels
- Work experience (role, company, period, description, tags)
- Projects (title, description, URL, tags)

That's it. No HTML knowledge needed.

---

## Deploying to GitHub Pages

1. Create a GitHub repo named `yourusername.github.io`
2. Upload all these files to the repo
3. Go to **Settings → Pages → Source** → set to `main` branch
4. Your site is live at `https://yourusername.github.io`

Every time you edit `_data/site.yml` and push to GitHub, your site updates automatically within ~30 seconds.

---

## File structure

```
portfolio/
├── _config.yml          # Site settings (title, URL)
├── _data/
│   └── site.yml         # ✏️  ALL your content lives here
├── _layouts/
│   └── default.html     # Page wrapper (nav, footer)
├── _includes/
│   └── nav.html         # Navigation bar
├── assets/
│   ├── css/main.css     # All styles
│   └── js/main.js       # Animations and interactions
├── index.html           # Page structure (uses data from site.yml)
└── Gemfile              # Jekyll dependencies
```

## Running locally (optional)

```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```
