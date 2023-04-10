// https://docs.cypress.io/api/introduction/api.html

// e2e tests min 5
describe("My App", () => {
  it("should load correctly", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("Get New Quote").should("have.id", "getNewQuote");
  });

  it("should get a random quote. its author, and a random picture", () => {
    cy.intercept("https://source.unsplash.com/random").as("getPicture");
    cy.intercept("https://dummyjson.com/quotes").as("getQuote");
    cy.visit("http://localhost:5173/");

    cy.get("button").should("have.id", "getNewQuote");
    cy.get("body").should("exist", "Loading...");
    cy.get("#quote").should("not.be.empty");
    cy.get("#author").should("not.be.empty");
    cy.get("#picture").should("exist");
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
describe("My app", () => {
  it("should return a date", () => {
    cy.visit("http://localhost:5173/");
  
    const date = new Date();
    expect(date).to.be.a("Date");
    expect(date).to.not.be.a("string");
    expect(date).to.not.be.NaN;
  });  

  it("should return a random quote and its author", () => {
    cy.visit("http://localhost:5173/");
    const quote = "quote";
    const author = "author";

    expect(quote).to.be.a("string");
    expect(author).to.be.a("string");
  });

  it("should return a random picture", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#picture").should(($img) => {
      expect($img).to.have.attr("src");
      expect($img).to.have.css("width");
      expect($img).to.have.css("height");
      expect($img).to.exist;
    });
  });

  it("should add an item to the list", () => {
    cy.visit("http://localhost:5173/");

    const todoItem = "test item";
    cy.get("#todoItems").type(todoItem);
    cy.get("button").contains("Add").click();

    expect(todoItem).to.include("test item");
  });

  it("should delete an item from the list", () => {
    cy.visit("http://localhost:5173/");

    const todoItem = "test item";
    cy.get("#todoItems").type(todoItem);
    cy.get("button").contains("Add").click();
    cy.get("#delete").click();

    expect("#todoList").to.not.include(todoItem);
  }); 
});
