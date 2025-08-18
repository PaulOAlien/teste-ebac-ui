/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
import enderecoPage from '../support/page-objects/endereco.page';
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Enderecos - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.login(perfil.usuario, perfil.senha)
    });
    it('Deve fazer cadastro faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento(//Captura o segundo objeto da lista dentro do arquivo endereço.json (ENDEREÇO DE FATURAMENTO)
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro entrega com sucesso', () => {
        enderecoPage.editarEnderecoEntrega(//Captura o PRIMEIRO objeto da lista dentro do arquivo endereço.json (ENDEREÇO DE ENTREGA)
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep
        )
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });
});