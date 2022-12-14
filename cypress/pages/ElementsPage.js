
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

        cy.get('#subjectsContainer').type('english{enter}')
      
        //upload
        const path='o.jpg';
        cy.get('#uploadPicture').attachFile(path);

        //data
        cy.get('#dateOfBirthInput').click()
        
        cy.get('#submit').click()

    }

    contemText(element,texto){
        cy.contains(element,texto).should('be.visible')
    }

    assertiva(){
        
    }
}

export default new ElementsPage;