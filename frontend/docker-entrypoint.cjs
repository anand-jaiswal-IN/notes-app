const fs = require("fs");

const apiUrl = process.env.API_URL || "http://127.0.0.1:8000";

fs.writeFileSync(
  "/app/dist/env.js",
  `window.__APP_CONFIG__ = window.__APP_CONFIG__ || {};
window.__APP_CONFIG__.VITE_API_URL = ${JSON.stringify(apiUrl)};
`
);