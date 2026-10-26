# ☕ Velvet Coffee — Coffee Shop Website

A modern, responsive coffee shop landing page built with **HTML, CSS, and vanilla JavaScript**. Designed as a front-end portfolio project with a warm, editorial visual style.

## Features

- Fully responsive layout for desktop, tablet, and mobile
- Hero section with call-to-action buttons
- Coffee shop story and photo gallery
- Interactive menu with category filters (All, Coffee, Cold Drinks, Bakery)
- Mobile navigation with accessible expanded state
- Location, business hours, and contact section
- Semantic HTML and basic accessibility support
- No framework or build tools required

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, responsive media queries)
- JavaScript (ES6+)
- Google Fonts
- Unsplash (remote demo images)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/velvet-coffee.git
   ```
2. Open the project folder:
   ```bash
   cd velvet-coffee
   ```
3. Open `index.html` in your browser. Alternatively, use the **Live Server** extension in VS Code.

No installation or dependencies are needed.

## Project Structure

```text
velvet-coffee/
├── index.html    # Website structure and content
├── styles.css    # Styling and responsive layout
├── script.js     # Menu filtering and mobile navigation
└── README.md     # Project documentation
```

## Customization

- Update the business name, address, opening hours, and email in `index.html`.
- Change menu items, descriptions, prices, and images in the `items` array in `script.js`.
- Adjust colors and typography through the CSS variables in `styles.css`.
- Replace the sample Unsplash images with photos you have permission to use.

> **Note:** Velvet Coffee is a fictional brand. All menu prices and business details are placeholders. Images load from external Unsplash URLs, so an internet connection is needed to display them.

## Deploy to GitHub Pages

1. Create a public GitHub repository and push these files to its root.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.
5. Once deployed, your website will be available at `https://YOUR_USERNAME.github.io/velvet-coffee/`.

## Future Improvements

- Shopping cart and checkout integration
- Contact form with a backend
- CMS-powered menu and inventory
- Dark mode toggle

## License

This demo project is intended for learning and portfolio use. Third-party images and fonts remain subject to their respective licenses.

## Alternative design

The site now includes `alternative.css`, a dark espresso and electric-lime redesign. It loads after `styles.css` in `index.html`. To return to the original cream-and-brown appearance, remove or comment out the `<link rel="stylesheet" href="alternative.css" />` line.
