// src/config/index.js
console.log(import.meta.env.VITE_API_BASE_URL);
const config = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
};
export default config;
