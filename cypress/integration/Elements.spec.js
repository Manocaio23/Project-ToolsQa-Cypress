/// <reference types="cypress"/>
import teste from '../pages/ElementsPage'
import ElementsFactory from '../factories/ElementsFactory'


describe('teste', () => {

    it.skip('visitar site', function() {
        teste.go()
        teste.clicarForms()

    });

    it('Preencher formulario', function(){

        var elements= ElementsFactory.elements()

        teste.go()
        teste.clicarForms()
        teste.preencherFormulario(elements)
        teste.contemText('Student Registration Form')
    });
    
});

