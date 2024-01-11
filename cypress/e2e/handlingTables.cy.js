describe("Handling tables", () => {
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php?route=common/login");

    cy.get("#input-username").type("demo");

    cy.get("#input-password").type("demo");

    cy.get("button[type='submit']").click();

    cy.get(".btn-close").click();
    //We need to go to customer main menu

    cy.get("#menu-customer >a").click();

    cy.get("#menu-customer >ul > li:first-child").click();
});

  it.skip("Check number of rows and cloumns", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody")
      .find("tr")
      .should("have.length", "10")
      .then((rowCount) => {
        cy.log(`Number of rows are:-  ${rowCount}`);
      });

    cy.get("table[class='table table-bordered table-hover']>thead>tr")
      .find("td")
      .should("have.length", "7")
      .then((columnCount) => {
        cy.log(`Number of coulns are ${columnCount}`);
      });
  });

  it.skip("Check cell data from specific row and column", () => {
    cy.get("tbody tr:nth-child(6) td:nth-child(3)").contains("ghh56@gmail.com");
  });

  it.skip("Read all row and cloumn data in first page", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
      ($row, index, $rows) => {
        //$rows contains all rows and $row is one row at a time
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });

  it("Pagination i.e Reading data from various pages", () => {
    let totalPages;
    //capture total number of pages
    cy.get(".col-sm-6.text-end").then((ele) => {
      const pageText = ele.text(); //we store text in variable then we will perform operation o get index on this

      totalPages = pageText.substring(
        pageText.indexOf("(") + 1,
        pageText.indexOf("Pages") - 1
      ); //It will give number of pages from string
      cy.log(`Total number of pages are == ${totalPages}`);
    });

    let totalPg = 5;

    for (let p = 1; p <= totalPg; p++) {
      if (totalPg > 1) {
        cy.log("Active page is == " + p);

        cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
        cy.wait(3000);

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
          ($row, index, $rows) => {
            //$rows contains all rows and $row is one row at a time
            cy.wrap($row).within(() => {
              cy.get("td").each(($col, index, $cols) => {
                cy.log($col.text());
              });
            });
          }
        );
      }
    }
  });
});
