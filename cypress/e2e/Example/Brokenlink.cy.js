describe("Broken Link Test", () => {

    it("Verify Navigation across the page", () => {

        cy.visit("https://ecommerce-playground.lambdatest.io/");

        let brokenLinks = 0;
        let activeLinks = 0;

        cy.get("a").each(($link, index) => {

            const href = $link.prop("href"); // ✅ handles relative URLs

            if (href) {
                cy.request({
                    url: href,
                    failOnStatusCode: false
                }).then((response) => {

                    if (response.status >= 400) {
                        cy.log(`❌ Link ${index + 1} is Broken`);
                        brokenLinks++;
                    } else {
                        cy.log(`✅ Link ${index + 1} is Active`);
                        activeLinks++;
                    }

                });
            }

        }).then(($links) => {

            const totalLinks = $links.length;

            cy.log(`Total Links: ${totalLinks}`);
            cy.log(`Total Broken Links: ${brokenLinks}`);
            cy.log(`Total Active Links: ${activeLinks}`);
        });

    });

});