
class ElementsPage{
    go(){
        cy.visit('/')

    }

    clicarForms(){
        cy.contains('.card-body h5', 'Forms').click()
        cy.contains(':nth-child(2) .element-list .menu-list #item-0 .text ','Practice Form').click()
    }

    preencherFormulario(elements){
        cy.get('input[placeholder="First Name"]').type(elements.name)
        cy.get('input[placeholder="Last Name"]').type(elements.lastName)
        cy.get('input[placeholder="name@example.com"]').type(elements.email)
        cy.get('input[placeholder="Mobile Number"]').type(elements.numero)
        cy.get('textarea[placeholder="Current Address"]').type(elements.textoArea)
        //cy.contains('.custom-control-label','Male').click()
    }

    contemText(texto){
        cy.contains('div[class="practice-form-wrapper"] h5',texto).should('be.visible')
    }
}

export default new ElementsPage;