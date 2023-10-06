describe("Count All Links on the Internet Page", () => {
    it("Counts all links", () => {
      let totalLinksCount = 0; // Initialize the count
  
      // Visit the Internet page
      cy.visit("https://the-internet.herokuapp.com/");
  
      // Find all links on the page using 'a' tag
      cy.get("a").each(() => {
        totalLinksCount++; // Increment the count for each link found
      }).then(() => {
        // After all links have been counted, log the total count
        cy.log(`Total links on the page: ${totalLinksCount}`);
      });
    });
  });