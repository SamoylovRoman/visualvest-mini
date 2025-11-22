# 🎭 VisualVest Mini Automation Project  
### Test Automation Case Study for “Junior Test Automation Engineer” Position (VisualVest)

This repository contains a compact demonstration project created specifically as a **case study for the Junior Test Automation Engineer position at VisualVest**.

The project showcases practical experience with:

- **UI automation** using Playwright + TypeScript  
- **API testing**  
- **Git version control workflows**  
- **Continuous Integration (CI)** via GitHub Actions  
- **Continuous Deployment (CD)** through GitHub Pages, which automatically publishes a small demo webpage  

The goal of this project is to demonstrate the essential automation and CI/CD skills relevant to the VisualVest position.

---

## 📂 Project Structure

```
visualvest-mini/
 ├── tests/
 │    ├── ui/
 │    │     └── playwright-home.spec.ts        # UI smoke tests
 │    └── api/
 │          └── api-sample.spec.ts             # API example tests
 │
 ├── site/                                      # Demo webpage deployed through GitHub Pages
 │    └── index.html
 │
 ├── playwright.config.ts                       # Playwright configuration
 ├── package.json
 ├── README.md
 │
 └── .github/
      └── workflows/
           ├── playwright-tests.yml             # CI pipeline: run all tests
           └── pages-deploy.yml                # CD pipeline: deploy /site to GitHub Pages
```

📌 The `/site` directory contains a simple static page used solely for demonstrating automatic deployment through GitHub Pages.

---

## 🔧 Continuous Integration (CI)

The CI workflow automatically:

1. Installs Node.js  
2. Installs all project dependencies  
3. Installs Playwright browsers  
4. Executes all UI and API tests  
5. Uploads the Playwright HTML report as an artifact  

Workflow location:  
`/.github/workflows/playwright-tests.yml`

---

## 🚀 Continuous Deployment (CD)

When the CI pipeline completes successfully, the CD workflow:

1. Takes the contents of the `/site` directory  
2. Deploys it automatically to **GitHub Pages**  
3. Publishes the site at:

```
https://<your-username>.github.io/visualvest-mini/
```

Workflow location:  
`/.github/workflows/pages-deploy.yml`

This demonstrates a simple but complete CI/CD setup using GitHub Actions and GitHub Pages.
