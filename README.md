Bootstrap System.css Theme
===========================

A retro Apple System OS (1984-1991) theme for Bootstrap 5, based on [system.css](https://github.com/sakofchit/system.css) by [@sakofchit](https://github.com/sakofchit).

> ⚠️ **This is a first version for testing purposes.** Feedback and contributions are welcome!

## Features

* **Authentic Retro Design**: Faithful recreation of the classic Apple System OS interface (1984-1991)
* **Full Bootstrap 5 Compatibility**: All Bootstrap components styled with the retro aesthetic
* **Original Fonts**: Includes authentic Chicago, Chicago_12, Monaco, and Geneva_9 fonts
* **Era-Appropriate Color Palette**: Darkened Apple QuickDraw colors for better contrast
* **System.css Components**: Includes additional retro UI elements (windows, title bars, etc.)
* **Classic Night**: Inverted "white on black" dark mode for the classic theme, via `data-bs-theme="dark"`
* **System Modern mode**: Opt-in colorful "2025" glass variant (light + Night), switched with a single class
* **No JavaScript Required**: Pure CSS theme overlay for Bootstrap 5

## Quick Start

### 1. Download or clone this repository

```sh
git clone https://github.com/YOUR_USERNAME/bootstrap-system-css-theme.git
cd bootstrap-system-css-theme
```

### 2. Include in your HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Retro App</title>

    <!-- Bootstrap 5.3.8 CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- System.css Theme Override -->
    <link href="css/bootstrap-system-theme.css" rel="stylesheet">
</head>
<body>
    <!-- Your Bootstrap content here -->

    <!-- Bootstrap JS Bundle -->
    <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### 3. Open `index.html` to see a live demo

The included `index.html` demonstrates all Bootstrap components with the retro theme applied.

## Components Included

* **Bootstrap 5.3.8**: Complete framework with all standard components
* **Retro-styled components**: Buttons, forms, cards, alerts, tables, modals, navbar, pagination, badges
* **System.css specific elements**: Windows, title bars, separators
* **Custom fonts**: Chicago, Chicago_12, Monaco, Geneva_9

## Color Palette

Era-appropriate darkened colors inspired by Apple QuickDraw:

* **Primary**: Dark Blue (#0033cc)
* **Secondary**: Dark Gray (#555555)
* **Success**: Dark Green (#006600)
* **Danger**: Dark Red (#aa0000)
* **Warning**: Dark Orange (#cc5500)
* **Info**: Dark Cyan (#0099cc)
* **Light**: Medium Gray (#999999)
* **Dark**: Black (#000000)

## Classic Night (dark mode)

The classic theme in "invert video", like a 1-bit Mac screen with inverted colors: white ink on black
paper, white desktop dot grid, inverted title-bar stripes, close boxes, checkboxes and Apple logo.
Accent colors are brightened to stay readable on black.

```html
<html lang="en" data-bs-theme="dark">
```

* `data-bs-theme="dark"` works on `<html>`, `<body>` or any element (for example a single
  `<nav class="navbar" data-bs-theme="dark">`). A `data-bs-theme="light"` element inside a dark one
  renders the classic light theme again.
* It lives in section 17 of the stylesheet. Each rule mirrors a classic rule with the same specificity,
  so the classic light theme is untouched.
* Colors are CSS custom properties: `--sc-ink`, `--sc-paper`, `--sc-dot` (desktop grid),
  `--sc-code-bg`, `--sc-disabled`, `--sc-muted` and the accents `--sc-primary`, `--sc-secondary`,
  `--sc-success`, `--sc-danger`, `--sc-warning`, `--sc-info`, `--sc-light-border`, `--sc-light-text`.
* Text utilities (`.text-*`, `.link-*`, `.border-*` for primary, secondary, success, danger) use the
  brightened accents (`--sc-primary-alt-rgb`, `--sc-secondary-rgb`, `--sc-success-rgb`,
  `--sc-danger-rgb`); fills (`.bg-*`, `.text-bg-*`) keep the classic colors so their white text stays readable.

| Role      | Classic   | Classic Night |
|-----------|-----------|---------------|
| Ink       | `#000000` | `#ffffff`     |
| Paper     | `#ffffff` | `#000000`     |
| Primary   | `#151515` | `#eaeaea`     |
| Secondary | `#555555` | `#aaaaaa`     |
| Success   | `#006600` | `#33cc33`     |
| Danger    | `#aa0000` | `#ff5555`     |
| Warning   | `#cc5500` | `#ff9933`     |
| Info      | `#0099cc` | `#33ccff`     |

> Before this version, `data-bs-theme="dark"` was neutralized and the classic theme stayed white.
> Pages that set it now render in Classic Night.

## System Modern mode

An opt-in, colorful "2025" reinterpretation of the theme. It takes the elegant Liquid Glass mood of
Nava OS (frosted panels, pastel aurora wallpaper, periwinkle accent) and keeps the System OS cues:
striped title bars, close and zoom boxes, offset shadows, inverted menu highlight, pixel glyphs,
dithered scrollbars, desktop grid and the six-color Apple logo.

It lives in the same stylesheet (section 16) and is enabled by one class. Without the class, the
legacy theme renders exactly as before.

### Enable it

```html
<html lang="en" class="system-modern" data-bs-theme="light">
```

* `class="system-modern"` can be set on `<html>` or on `<body>`.
* `data-bs-theme="dark"` switches to the **Night** palette (deep navy and teal glass). Put it on the same
  element as the class. Night is never automatic: it only follows `data-bs-theme`.
* Without the class, `data-bs-theme="dark"` gives [Classic Night](#classic-night-dark-mode) instead.

Switch at runtime:

```js
document.documentElement.classList.toggle('system-modern');
document.documentElement.setAttribute('data-bs-theme', 'dark'); // or 'light'
```

The demo pages (`index.html`, `dev.html`) include a **Modern / Night** switch in the navbar (Night also
works in classic mode), remembered
in `localStorage`.

### Palette

| Role       | Fill (light & Night) | Text emphasis (light / Night) |
|------------|----------------------|-------------------------------|
| Primary    | `#4f5bd5`            | `#2f3a9e` / `#b9c3ff`         |
| Secondary  | `#5b6475`            | `#394152` / `#c4cad8`         |
| Success    | `#13795b`            | `#0b5741` / `#8fe0c4`         |
| Info       | `#5bbfcc`            | `#135e69` / `#9edbe4`         |
| Warning    | `#f2a65a`            | `#7a4210` / `#f7c99a`         |
| Danger     | `#c43d6b`            | `#8e2148` / `#f5a9c3`         |
| Body text  | —                    | `#1e1f3a` / `#e8eaff`         |
| Background | —                    | `#eef1fb` / `#0f1530`         |

Fills are identical in light and Night so white text on them keeps its contrast. For colored text in
Night, prefer the `-emphasis` utilities (`.text-primary-emphasis`, ...). Bootstrap's `--bs-*`
variables are remapped, so utilities such as `.text-success` or `.bg-danger-subtle` follow the palette.

### Customizing

Design tokens are CSS custom properties defined on `.system-modern` (and redefined for Night):

* `--sm-glass`, `--sm-glass-strong`, `--sm-glass-solid`: panel fills
* `--sm-blur`: glass blur (`backdrop-filter`)
* `--sm-stripes`, `--sm-stripes-opacity`: title-bar pinstripes
* `--sm-offset`: color of the System offset shadow
* `--sm-aurora`, `--sm-sails`, `--sm-grid`: desktop wallpaper
* `--sm-close`, `--sm-zoom`: close and zoom box colors
* `--sm-card-filter`: `none` by default; set it to `var(--sm-blur)` to blur cards too (only when no
  modal or dropdown is nested inside a card)

### Notes

* Keep sections 16 (System Modern) and 17 (Classic Night) after sections 1-15: their rules win ties by
  source order.
* The wallpaper is a fixed `body::before` layer: don't set a background on `<html>`, and don't put
  `transform`, `filter` or `opacity` on `<body>`.
* Keep modals and dropdowns outside `.window` and `.standard-dialog` (glass panels are containing blocks).
* Like the legacy theme, the modern layer overrides `.bg-*` utilities on `.navbar` (`!important`).
* Honors `prefers-reduced-motion`, `prefers-reduced-transparency`, `prefers-contrast: more` and
  `forced-colors`. Without `backdrop-filter` support, panels become nearly opaque.
* `:has()` is required when the class is set on `<body>` (Chrome 105+, Safari 15.4+, Firefox 121+).
* Not themed yet in modern mode (still Bootstrap's stock colors): `.form-switch`, `.nav-pills`,
  `.nav-tabs`, `.list-group`, `.progress`, `.form-range`, `.accordion`, toasts, `.table-{variant}`,
  `.input-group` and `.form-floating` details.

## Browser Compatibility

Tested on modern browsers:
* Chrome/Edge (latest)
* Firefox (latest)
* Safari (latest)

## Credits

* **Original system.css**: [@sakofchit](https://github.com/sakofchit) - [system.css](https://github.com/sakofchit/system.css)
* **Bootstrap 5**: [Bootstrap Team](https://getbootstrap.com/)
* **Fonts**: Chicago, Chicago_12, Monaco, Geneva_9 from the system.css project
* **System Modern inspiration**: the Liquid Glass look of Nava OS
* **Theme Development**: EIRL Richard Déloge - <https://deloge.io>

### AI Assistance

This project was developed with assistance from Claude (Anthropic) for code generation and theme customization.

## License

MIT License - see [LICENSE](LICENSE) file for details.

Original system.css by [@sakofchit](https://github.com/sakofchit) is also MIT licensed.
Bootstrap 5 is MIT licensed.

## Support

This is a first version for testing purposes. If you find bugs or have suggestions:

* Open an issue on [GitHub Issues](https://github.com/YOUR_USERNAME/bootstrap-system-css-theme/issues)
* Submit a pull request - see [CONTRIBUTING.md](CONTRIBUTING.md)

For questions, contact: [richard@teknoo.software](mailto:richard@teknoo.software)

---

**Enjoy the nostalgia!** 🍎
