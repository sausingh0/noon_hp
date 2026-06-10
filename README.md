# noon_hp

Interactive, iPhone-first clone of the provided Noon-style homepage screenshot.

## What is included

- Mobile Safari-friendly static web app
- Screenshot-matched stacked feed: blue header, service tiles, vouchers, compact promo cards, dense product rails, category grids, yellow deal banners, and bottom navigation
- Subtle interactions for search filtering, category taps, service tab states, wishlist toggles, cart counter, and toast messages
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
