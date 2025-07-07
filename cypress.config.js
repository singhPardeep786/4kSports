import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'm7opbr',
  e2e: {
    setupNodeEvents(on, config) {
      // Custom task for logging
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      });
      return config;
    },
    baseUrl: 'https://4ksports-azure.vercel.app/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },
});
