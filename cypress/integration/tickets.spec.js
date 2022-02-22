describe.only('Tickets', () => {

    const uri = "https://ticket-box.s3.eu-central-1.amazonaws.com/index.html";
    const name = "LUCAS";
    const secondName = "RODRIGUES COSTA";
    const fullName = `${name} ${secondName}`;

    beforeEach(() => cy.visit(uri));

    it("fills all the text input fields ", () => {
        cy.get("#first-name").type(`${name}`);
        cy.get("#last-name").type(`${secondName}`);
        cy.get("#email").type("saviojrc.1988@gmail.com");
        cy.get("#requests").type("Vegetarian");
        cy.get("#signature").type(`${fullName}`);

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

    it("has 'TICKTBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    });

    it("alerts on invalid e-mail", () => {
        cy.get("#email")
            .as("email")
            .type("saviojrc.1988-gmail.com");

        cy.get("#email.invalid")
            .should("exist");

        cy.get("@email")
            .clear()
            .type("saviojrc.1988@gmail.com");

        cy.get("#email.invalid")
            .should("not.exist");
    });

    it("fills and reset the form", () => {

        cy.get("#first-name")
            .type(`${name}`);
        cy.get("#last-name")
            .type(`${secondName}`);
        cy.get("#email")
            .type("saviojrc.1988@gmail.com");
        cy.get("#ticket-quantity")
            .select("2");
        cy.get("#vip")
            .check();
        cy.get("#friend")
            .check();
        cy.get("#publication")
            .check();
        cy.get("#requests")
            .type("Vegetarian");

        cy.get(".agreement p")
            .should(
                "contain",
                `I, ${fullName}, wish to buy 2 VIP tickets.`
            );


        cy.get("#agree")
            .click();
        cy.get("#signature")
            .type(`${fullName}`);

        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled");

        cy.get("button[type='reset']")
            .click();

        cy.get("@submitButton")
            .should("be.disabled");
    });

    it("fills mandatory fields using support command", () => {
        const customer = {
            fistName: "João",
            lastName: "Silva",
            email: "joaosilva@gmail.com"
        };

        cy.fillMandatoryFields(customer);

        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled");

        cy.get("button[type='reset']").click();

        cy.get("@submitButton")
            .should("be.disabled");


    });
});