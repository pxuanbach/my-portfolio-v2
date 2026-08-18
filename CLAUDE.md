# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular 17 portfolio application with two routes:
- `/` — Landing page displaying portfolio content
- `/pdf-view` — Lazy-loaded module that renders the portfolio as a PDF using `pdfMake`

## Common Commands

```bash
ng serve              # Dev server at http://localhost:4200
ng build              # Production build to dist/portfolio
ng build:prod         # Production build with custom base-href for deployment
ng test               # Run unit tests via Karma
ng deploy:ghpages     # Deploy to GitHub Pages (angular-cli-ghpages)
```

Docker:
```bash
docker build -t pxuanbach/my-portfolio-v2 .   # Build image
docker compose up -d                           # Run container
docker compose down                            # Stop container
```

## Architecture

### Data Layer (`src/app/@data/`)
JSON files in `src/assets/db/` are the source of truth. Each entity (basic-detail, educations, experiences, skills, projects, personal-projects) has:
- A **DTO interface** in `dto/` (e.g., `basic-detail.ts`)
- A **service** in `@data/` that extends a `*Data` base class, reads the JSON, and exposes it as an `Observable`

### Services (`src/app/@services/`)
- `PdfService` — Aggregates all data services, builds a `pdfMake` document definition, and exposes `createPDF(callback)` to generate a base64-encoded PDF.

### Pages
- `pages/landing/` — Main landing page. Contains `NavbarComponent` and `PortfolioComponent`. Portfolio sub-components: `education`, `experience`, `project`, `personal-project`, `skill`.
- `pages/pdf-view/` — Lazy-loaded module (`PdfViewModule`). Uses `NgxExtendedPdfViewerModule` to display PDFs.

### Routing
- `app.routes.ts` defines two routes. `PdfViewModule` is lazy-loaded via `loadChildren`.
- `PdfService` is provided in `PdfViewModule` scope (not root), so PDF content is rebuilt when entering the route.

### Styles
- Global styles: `src/styles.scss`, `src/_base.scss`, `src/_responsive.scss`
- Component styles use SCSS and are colocated with each component.

## Key Files

| File | Purpose |
|---|---|
| `src/assets/db/*.json` | Portfolio content data (edit these to update content) |
| `src/app/@services/pdf.service.ts` | PDF generation logic |
| `src/environments/environment.ts` | PDF typography/spacing constants |
| `angular.json` | Build config, asset paths (includes PDF viewer assets) |
