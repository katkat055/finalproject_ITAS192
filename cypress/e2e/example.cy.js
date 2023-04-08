// https://docs.cypress.io/api/introduction/api.html

// e2e tests min 5
describe('My App', () => {
  it('should load correctly', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('Get New Quote').should('have.id', 'getNewQuote')
  })
})

it('should get a random quote and picture', () => {
  cy.intercept('https://dummyjson.com/quotes').as('getQuote');
  cy.intercept('https://source.unsplash.com/random').as('getPicture');
  cy.visit('http://localhost:5173/')

  cy.get('button').should('have.id', 'getNewQuote');
  cy.get('body').should('exist', 'Loading...')
  cy.get("#quote").should("not.be.empty");
  cy.get("#author").should("not.be.empty");
  cy.get("#picture").should("not.be.empty");
});

it ('should add an item to the list and delete item', () => {
  cy.visit('http://localhost:5173/')

  cy.get("#todoItems").type("test item");
  cy.get("button").contains("Add").click();
  cy.get("#delete").click();
  cy.get("#todoItems").should("not.have.text", "test item");
});

// unit tests min 10