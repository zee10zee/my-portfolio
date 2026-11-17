# AGENTS.md

These are mandatory project rules. Follow them exactly.

## Suggested layout

```
src/
  components/
    NavBar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Contributions.jsx
    Courses.jsx        // "coming soon" + waitlist
    Contact.jsx
    Footer.jsx
  data/
    contributions.js   // array of {title, desc, link, tags}
    skills.js
  pages/
    Home.jsx
    CoursesPage.jsx    // later
  App.jsx
```

Keeping content in `data/` files means you update text without touching components — great when you add courses later.

## Section-by-section Reactstrap sketch

- **NavBar** — `Navbar`, `NavbarBrand`, `NavbarToggler`, `Collapse`, `Nav`, `NavItem`, `NavLink`. Sticky top (`sticky="top"`), collapses on mobile for free.
- **Hero** — `Container` > `Row` > `Col md={6}` for text, `Col md={6}` for avatar/image. Two `Button`s: "Contact me" and "View work". Use `py-5` / `min-vh-75` for breathing room.
- **About** — single `Container` with a `Col lg={8} mx-auto`, short paragraphs.
- **Skills** — `Row` of `Col` with `Badge` components (`color="primary"`, `pill`). Group by category in separate rows.
- **Contributions** — `Row` of `Col md={6} lg={4}`, each containing a `Card` > `CardBody` > `CardTitle`, `CardText`, and a `Button` with `href`. Map over your `contributions.js` array.

## Routing (add when you need it)

Set up React Router now with two routes so the Courses page has a home. Even if `/courses` just says "Coming soon" for now, the URL exists and your nav can point to it.

## Practical tips specific to Reactstrap

- Don't fight Bootstrap — use its spacing utilities (`mt-4`, `py-5`, `gx-4`) instead of writing custom CSS.
- Override with care — if you want a custom color, set it via CSS variables (`--bs-primary`) rather than editing component styles.
- Use `h-100` on cards inside a `Row` — it's the classic fix for uneven card heights.
- Keep a `data/` folder — it's the React way to make content editable later, and it's exactly what you'll need when courses become real.
- Lazy-load the Courses page later with `React.lazy` if it grows heavy — not needed now.

## Suggested build order

1. Scaffold with Vite, install Reactstrap + Bootstrap, confirm a `Button` renders styled.
2. Build `NavBar` + `Hero` + `Footer` — get the shell looking right.
3. Add `About` + `Skills` + `Contributions` from `data/` arrays.
4. Add `Contact`.
5. Add React Router with a placeholder `/courses`.