const viewWidth = 1280;
const viewHeight = 768;
const footerHeight = 129;
const paddingLeft = 96;
const paddingRight = 80;
const filename = (new Date()).toISOString()

it('US top 14', () => {
  // handle crappy websites
  cy.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })

  cy.visit('https://www.worldometers.info/coronavirus/country/us/')

  // TODO: interact with the page to load results
  cy.viewport(viewWidth, viewHeight)

  cy.scrollTo(0, 1200)

  cy.get('#nav-yesterday-tab a').click()

  cy.get('#nav-yesterday .sorting:nth-of-type(4)').click()

  cy.screenshot(`${filename}-US`, {
    // capture: 'fullPage',
    capture: 'viewport',
    timeout: 10000,
    clip: {
      x: paddingLeft, y: 0, width: viewWidth - paddingLeft - paddingRight, height: viewHeight - footerHeight
    },
  })
})

it('World top 14', () => {
  // handle crappy websites
  cy.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })

  cy.visit('https://www.worldometers.info/coronavirus/')

  // TODO: interact with the page to load results
  cy.viewport(viewWidth, viewHeight)

  cy.scrollTo(0, 1200)

  cy.get('#nav-yesterday-tab a').click()

  cy.get('#nav-yesterday .sorting:nth-of-type(4)').click()

  cy.screenshot(`${filename}-World`, {
    // capture: 'fullPage',
    capture: 'viewport',
    timeout: 10000,
    clip: {
      x: paddingLeft, y: 0, width: viewWidth - paddingLeft - paddingRight, height: viewHeight - footerHeight
    },
  })
})
