/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')


context('funcionalidade login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('deve fazer login com sucesso', ()=>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain','Minha conta')
    })

    it('Deve fazer login com sucesso - usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain','Minha conta')
    })

    it.only('Deve fazer login com sucesso - usando FIXTURES', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log:false}); //Não exibe a senha
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('contain','Minha conta')
            })
        })


    it('deve exibir mensagem de erro ao inserir usuario inválido', ()=>{
        cy.get('#username').type('aluno_ebac@')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click() 
    })

    it('deve exibir mensagem de erro ao inserir senha inválida', ()=>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})