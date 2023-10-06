describe('GET Request Tests', () => {
    it('should retrieve a booking by ID', () => {
      cy.request('GET', 'https://restful-booker.herokuapp.com/booking/1')
        .then((response) => {
          // Assert the response status code (200 for success)
          expect(response.status).to.equal(200);
  
          // Assert the response body or any specific properties as needed
          expect(response.body).to.have.property('firstname', 'Mary');
          expect(response.body).to.have.property('lastname', 'Jones');
        });
    });
  });