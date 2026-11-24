# Hotel Swarna Heights, Vijayawada

- `npm install && npm run dev` then open http://localhost:3104
- All text, rooms, photos, distances and FAQ live in `site.js`. TODO items (PureBook slug, email, coordinates) are marked there.
- Photos: `scripts/optimize-images.py` builds responsive WebP files from `images-original/` (not included; the optimized files are already in `public/images`).
- Nearby distances marked `~` are road estimates. Verify them with the map link in `site.js` before launch.
