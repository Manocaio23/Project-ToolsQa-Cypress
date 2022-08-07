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
        teste.contemText('div[class="practice-form-wrapper"] h5','Student Registration Form')
        teste.preencherFormulario(elements)
        teste.contemText('#example-modal-sizes-title-lg','Thanks for submitting the form')
        //asssrtivas
        teste.contemText('table[class="table table-dark table-striped table-bordered table-hover"] tr td ','Mano Last Name')
        teste.contemText('table[class="table table-dark table-striped table-bordered table-hover"] tr td ','caioteste@outlook.com')
        teste.contemText('table[class="table table-dark table-striped table-bordered table-hover"] tr td ','Male')
        teste.contemText('table[class="table table-dark table-striped table-bordered table-hover"] tr td ','1234567899')
        teste.contemText('table[class="table table-dark table-striped table-bordered table-hover"] tr td ','07 August,2022')
        teste.contemText('table[class="table table-dark table-striped table-bordered table-hover"] tr td ','Sports, Music')
        teste.contemText('table[class="table table-dark table-striped table-bordered table-hover"] tr td ','o.jpg')
        teste.contemText('table[class="table table-dark table-striped table-bordered table-hover"] tr td ','texto para area')
        teste.contemText('table[class="table table-dark table-striped table-bordered table-hover"] tr td ','Haryana Panipat')

    });
    
});

