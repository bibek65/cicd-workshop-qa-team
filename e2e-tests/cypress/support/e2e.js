// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})