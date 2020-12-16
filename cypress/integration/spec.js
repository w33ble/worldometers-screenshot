const viewWidth = 1280;
const viewHeight = 768;
const footerHeight = 129;
const paddingLeft = 96;
const paddingRight = 80;
const filename = (new Date()).toISOString()

function loadPage(url, prune = false) {
  cy.viewport(viewWidth, viewHeight)

  cy.visit(url)

  // remove the first 2 rows, to stop the ads from showing up
  cy.window().then( win => {
    win.document.querySelector('.row').remove()
    win.document.querySelector('.row').remove()
  });

  cy.get('#nav-yesterday-tab a').click()

  cy.get('#nav-yesterday .sorting:nth-of-type(4)').click()
}

beforeEach(() => {
  // handle crappy websites
  cy.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })
})

it('US top 14', () => {
  loadPage('https://www.worldometers.info/coronavirus/country/us/')

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
  loadPage('https://www.worldometers.info/coronavirus/')

  cy.screenshot(`${filename}-World`, {
    // capture: 'fullPage',
    capture: 'viewport',
    timeout: 10000,
    clip: {
      x: paddingLeft, y: 0, width: viewWidth - paddingLeft - paddingRight, height: viewHeight - footerHeight
    },
  })
})
