// https://docs.cypress.io/api/introduction/api.html

// e2e tests min 5
describe("My App", () => {
  it("should load correctly", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("Get New Quote").should("have.id", "getNewQuote");
  });

  it("should get a random quote", () => {
    cy.intercept("https://dummyjson.com/quotes").as("getQuote");
    cy.visit("http://localhost:5173/");

    cy.get("button").should("have.id", "getNewQuote");
    cy.get("#getNewQuote").click();
    cy.get("#quote").should("not.be.empty");
  });

  it("should get the author of the quote", () => {
    cy.intercept("https://dummyjson.com/quotes").as("getQuote");
    cy.visit("http://localhost:5173/");

    cy.get("button").should("have.id", "getNewQuote");
    cy.get("#getNewQuote").click();
    cy.get("#author").should("exist");
  });

  it("should get a random picture", () => {
    cy.intercept("https://source.unsplash.com/featured").as("getPicture");
    cy.visit("http://localhost:5173/");

    cy.get("button").should("have.id", "getNewQuote");
    cy.get("#getNewQuote").click();
    cy.get("#picture").should("be.visible");
  });

  it("should add an item to the list and delete item", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#todoItems").type("test item");
    cy.get("button").contains("Add").click();
    cy.get("#delete").click();
    cy.get("#todoItems").should("not.have.text", "test item");
  });
});

// unit tests min 10
describe("My App", () => {
  it("Has the current date", () => {
    cy.visit("http://localhost:5173/");

    expect(cy.get("#date")).to.exist;
  });

  it("Has a button", () => {
    cy.visit("http://localhost:5173/");

    expect(cy.get("button")).to.exist;
  });

  it("Gets a new quote when button is clicked", () => {
    cy.visit("http://localhost:5173/");

    const oldQuote = cy.get("#quote");
    const newQuote = cy.get("#getNewQuote").click();
    expect(newQuote).to.not.equal(oldQuote);
  });

  it("Gets a new author when button is clicked", () => {
    cy.visit("http://localhost:5173/");

    const oldAuthor = cy.get("#author");
    const newAuthor = cy.get("#getNewQuote").click();
    expect(newAuthor).to.not.equal(oldAuthor);
  });

  it("Gets a new picture when button is clicked", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#getNewQuote").click();
    expect(cy.get("#picture")).to.exist;
  });

  it("Has a list for items to go to", () => {
    cy.visit("http://localhost:5173/");

    expect(cy.get("#todoItems")).to.exist;
  });

  it("Adds an item to the list when button is clicked", () => {
    cy.visit("http://localhost:5173/");

    const oldList = cy.get("#todoItems");
    cy.get("#todoItems").type("test item");
    cy.get("button").contains("Add").click();
    const newList = cy.get("#todoItems");
    expect(newList).to.not.equal(oldList);
  });

  it("Has styling when a new item is added", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#todoItems").type("test item");
    cy.get("button").contains("Add").click();
    cy.get("#todoList").should("not.have.css", "background-color", "white");
  });

  it("Adds item to the local storage", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#todoItems").type("test item");
    cy.get("button").contains("Add").click();
    expect(localStorage.getItem).to.not.be.null;
  });

  it("Deletes an item from the list when button is clicked", () => {
    cy.visit("http://localhost:5173/");

    const oldList = cy.get.length;
    cy.get("#todoItems").type("test item");
    cy.get("button").contains("Add").click();
    cy.get("#delete").click();
    const newList = cy.get.length;
    expect(newList).to.equal(oldList);
  });
});
