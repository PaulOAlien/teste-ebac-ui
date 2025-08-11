/// <reference types="cypress" />


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