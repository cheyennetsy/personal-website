# Editing portfolio content

All projects, travel entries, and external links live in `site.ts`.

- Add a project to `projects`, give it a unique `slug`, and its gallery and case-study route are created automatically.
- Add photographs to `travelPhotos`; `displayOrder` controls their sequence and `orientation` controls the crop. The `featured` flag controls homepage visibility.
- Replace every `20XX`, location placeholder, caption placeholder, and project summary with verified content.
- Add real `linkedin` and `github` profile URLs in `links`.
- Replace the placeholder email before publishing.
- Replace the URLs in `aboutImages` with personal photographs. The About page composition will remain intact.

Remote image URLs can be replaced with paths to files placed in `public/` (for example, `/images/project-name.jpg`).
