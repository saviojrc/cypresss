describe.only('Tickets', () => {

    const uri = "https://ticket-box.s3.eu-central-1.amazonaws.com/index.html";
    const name = "SAVIO JAILSON";
    const secondName = "RODRIGUES COSTA";

    beforeEach(() => cy.visit(uri));

    it("fills all the text input fields ", () => {
        var firtName = cy.get("#first-name");
        var lastName = cy.get("#last-name");
        var email = cy.get("#email");
        var specialRequest = cy.get("#requests");
        var signature = cy.get("#signature")


        firtName.type(name);
        lastName.type(secondName);
        email.type("saviojrc.1988@gmail.com");
        specialRequest.type("Vegetarian");
        signature.type(name + " " + secondName);

    });

    it.only("has 'TICKTBOX' header's heading", () => {

    });
});