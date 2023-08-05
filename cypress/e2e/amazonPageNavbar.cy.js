describe("Amazon Navigation Menu", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.in");
  });

  it("Should open homepage again while click on Amazon logo", () => {
    cy.get("#nav-logo").click();
    cy.url().should("include", "https://www.amazon.in");
  });

  it("Should open a address pop-up on the homepage", () => {
    cy.get("#nav-global-location-slot").click();
    cy.get(".a-modal-scroller").should("have.css", "visibility", "visible");
    cy.get("#a-popover-header-1").contains("Choose your location");
  });

  it("Should open All catagories scrollbar", () => {
    cy.get(".nav-search-scope").should("not.have.class", "nav-focus");
    cy.get(".nav-search-scope").click();
    cy.get(".nav-search-scope").should("have.class", "nav-focus");
  });

  it("Verify that the user can search for products by entering keywords in the search bar", () => {
    cy.get("#twotabsearchtextbox").type("iphone").type("{enter}");
    cy.url().should("include", "iphone");
    cy.get(".sg-col-inner").contains("iphone");
  });

  it("Should verify language list dropbox is visible on hovering and open language preferences page on click of 'EN'", () => {
    cy.get("#icp-nav-flyout").trigger("mouseover");
    cy.get("#icp-nav-flyout").should("have.class", "nav-active");
    cy.get("#icp-nav-flyout").click();
    cy.url().should("include", "customer-preferences");
    cy.get("#icp-language-heading").contains("Language Settings");
  });

  it("Should verify sign-in pop-up is visible on hovering and open sign-in page on click of 'Account & Lists'", () => {
    cy.get("#nav-link-accountList").trigger("mouseover");
    cy.get("#nav-link-accountList").should("have.class", "nav-active");
    cy.get("#nav-link-accountList").click();
    cy.url().should("include", "signin");
    cy.get(".a-box").contains("Sign in");
  });

  it("Should open order history page if signed-in or sign-in page on click of 'Returns and Orders'", () => {
    cy.get("#nav-orders").click();
    cy.url().should("include", "order-history");
  });

  it("Should open cart page on click of cart icon", () => {
    cy.get("#nav-cart").click();
    cy.url().should("include", "cart");
  });

  it("Should open sidebar on click of 'All'", () => {
    cy.get("#nav-hamburger-menu").click();
    cy.get("#hmenu-canvas").should("have.class", "hmenu-translateX");
  });

  it("Should open Amazon miniTV page on click of 1st option i.e. 'miniTV'", () => {
    cy.get("#nav-xshop").find("a").first().click();
    cy.url().should("include", "minitv");
  });

  it("Should open sell page on click of 1st option i.e. 'Sell'", () => {
    cy.get("#nav-xshop").find("a").eq(1).click();
    cy.url().should("include", "sell");
  });

  it("Should open best sellers page on click of 1st option i.e. 'Best Sellers'", () => {
    cy.get("#nav-xshop").find("a").eq(2).click();
    cy.url().should("include", "bestsellers");
  });

  it("Should open latest deals page on click of 1st option i.e. 'Today's Deals'", () => {
    cy.get("#nav-xshop").find("a").eq(3).click();
    cy.url().should("include", "gb");
  });

  it("Should open best mobiles page on click of 1st option i.e. 'Mobiles'", () => {
    cy.get("#nav-xshop").find("a").eq(4).click();
    cy.url().should("include", "mobiles");
  });

  it("Should open latest offer page on click of the last poster of second navbar", () => {
    cy.get(".nav-imageHref").find("img").click({ force: true });
    cy.url().should("include", "events");
  });
});
