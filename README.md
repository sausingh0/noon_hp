# noon_hp

Interactive, iPhone-first recreation of a Noon-style ecommerce homepage.

## What is included

- Mobile Safari-friendly static web app
- Noon-inspired yellow header, delivery selector, search bar, promo hero, categories, deal rail, product grid, and bottom navigation
- Interactive search suggestions, category filtering, wishlist toggles, cart counter, toast messages, and countdown timer
- Web app manifest and SVG icon so it can be added to an iPhone home screen

## Run locally

No dependencies are required. Serve the files with any static server:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

For iPhone testing, serve from a machine reachable on the same network and open the network URL in Safari. Use Safari's share menu and choose "Add to Home Screen" for the standalone app experience.
