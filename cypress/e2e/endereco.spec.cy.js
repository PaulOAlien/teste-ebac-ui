/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade Enderecos - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.login(perfil.usuario, perfil.senha)
    });
    it('Deve fazer cadastro faturamento com sucesso', () => {
        
    });
});