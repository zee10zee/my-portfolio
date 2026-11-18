# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Contact form (EmailJS)

Copy `.env.example` to `.env.local` and fill in the EmailJS service ID, template ID, and public key. Set the template's **To Email** to the recipient address from `src/data/profile.js` or `{{to_email}}` (do not use `{{username}}` there). The form sends `{{subject}}`, `{{username}}`, `{{reply_to}}`, and `{{userMessage}}`; use those exact names in the template. Set **Reply To** to `{{reply_to}}`.

The public key is intended for browser use. Restrict the EmailJS service to your website domain in the EmailJS dashboard.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
