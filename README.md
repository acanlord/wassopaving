# Wasso Paving — static Vite site

This is a standard React/Vite single-page application. It builds to static files only; no Node server or Lovable/TanStack Start runtime is required in production.

## Develop locally

```sh
npm install
npm run dev
```

## Build for GoDaddy

```sh
npm run build
```

Upload the **contents** of the generated `dist/` folder to the domain's `public_html` directory in GoDaddy File Manager or via FTP. The supplied `.htaccess` file lets direct visits to `/services`, `/work`, `/about`, and `/contact` load correctly on Apache hosting.

The estimate form remains a front-end confirmation only. Static hosting has no mail-processing backend; connect it to a form endpoint or GoDaddy email service before relying on it for leads.
# wassopaving
