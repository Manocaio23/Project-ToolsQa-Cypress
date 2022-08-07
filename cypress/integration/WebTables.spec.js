/// <reference types="cypress"/>
import teste2 from '../pages/WebTablesPage'
import WebTablesFactory from '../factories/WebTablesFactory'

describe('Crud',()=>{

    it('Cadastrar com sucesso e validar se está cadastrado',function(){

        var webElements= WebTablesFactory.webtables()

        teste2.go()
        teste2.clicarWebTables()
        teste2.cadastrar(webElements)
        teste2.assertivas('div[class="rt-td"]','Caio')
        teste2.assertivas('div[class="rt-td"]','Augusto')
        teste2.assertivas('div[class="rt-td"]','caio18augusto')
        teste2.assertivas('div[class="rt-td"]','25')
        teste2.assertivas('div[class="rt-td"]','1000')
        teste2.assertivas('div[class="rt-td"]','Celk Sistemas')
        
    });

    it('Editar nome um dado existente e validar o novo nome',()=>{
        teste2.go()
        teste2.clicarWebTables()
        teste2.editar()
        teste2.assertivas('div[class="rt-td"]','Novo nome')

    })

    it('apagar um usuário Kierra e validar que foi deletado',()=>{
        teste2.go()
        teste2.clicarWebTables()
        teste2.assertivas('div[class="rt-td"]','Kierra')
        teste2.apagar()
        


    })



})