import WebTablesFactory from "../factories/WebTablesFactory"

class WebTablesPage{
   
    go(){
        cy.visit('/')
    }

    clicarWebTables(){
        cy.contains('.card-body h5', 'Elements').click()
        cy.contains(' span[class="text"]','Web Tables').click()

    }

    cadastrar(webtables){
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type(webtables.firstName)
        cy.get('#lastName-wrapper').type(webtables.lastName)
        cy.get('#userEmail').type(webtables.email)
        cy.get('div[class="col-md-2 col-sm-12"]').type(webtables.age)
        cy.get('#salary-wrapper').type(webtables.salary)
        cy.get('#department-wrapper').type(webtables.departament)
        cy.get('#submit').click()

    }

    assertivas(element,texto){
        cy.contains(element,texto).should('be.visible')
    }

    editar(){
        cy.get('#edit-record-1').click()
        cy.get('#firstName-wrapper').clear()
        cy.wait(1000)
        cy.get('#firstName-wrapper').type('Novo nome')
        cy.get('#submit').click()
    
    }

    apagar(){
        cy.get('#delete-record-3').click()
        cy.contains('div[class="rt-td"]','Kierra')
      .should('not.exist')
    }

    

   
}
export default new WebTablesPage;