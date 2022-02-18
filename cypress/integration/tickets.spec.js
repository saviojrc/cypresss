describe.only('Tickets', () => {

    const uri = "https://ticket-box.s3.eu-central-1.amazonaws.com/index.html";
    const name = "SAVIO JAILSON";
    const secondName = "RODRIGUES COSTA";

    beforeEach(() => cy.visit(uri));

    it("fills all the text input fields ", () => {
        cy.get("#first-name").type(name);
        cy.get("#last-name").type(secondName);
        cy.get("#email").type("saviojrc.1988@gmail.com");
        cy.get("#requests").type("Vegetarian");
        cy.get("#signature").type(`${name} ${secondName}`);

    });

    it("Select 'two' tickets  ", () => {
        cy.get("#ticket-quantity").select("2");
    });

    it("Select 'vip'  ticket type", () => {
        cy.get("#vip").check();
    });

    it("Select 'social media' checkbox", () => {
        cy.get("#social-media").check();
    });

    it("Selects 'friend' and 'publication' , then uncheck 'fried' ", () => {
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });

    it.only("has 'TICKTBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    });
});