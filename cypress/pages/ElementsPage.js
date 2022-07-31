
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
        
        cy.get('input[value=Male]').should('be.enabled')
        cy.get('input[value=Male]').check({force:true})
        
        cy.get('input[placeholder="Mobile Number"]').type(elements.numero)
        cy.get('textarea[placeholder="Current Address"]').type(elements.textoArea)
        
        cy.get('#hobbies-checkbox-1').should('be.enabled')
        cy.get('#hobbies-checkbox-1').check({force:true})
        cy.get('#hobbies-checkbox-3').should('be.enabled')
        cy.get('#hobbies-checkbox-3').check({force:true})

        cy.get('.css-1hwfws3').eq(1).click()
        cy.contains('Haryana').click()

        cy.get('.css-1hwfws3').eq(2).click()
        cy.contains('Panipat').click()
    }

    contemText(texto){
        cy.contains('div[class="practice-form-wrapper"] h5',texto).should('be.visible')
    }
}

export default new ElementsPage;