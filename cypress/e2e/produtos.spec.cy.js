/// <reference types="cypress" />

describe('Funcionalidade da página de produtos', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').first().click()
        //cy.get('[class="product-block grid"]').last().click() - pega o ultimo da lista
        //cy.get('[class="product-block grid"]').eq(4).click() - pega o quarto item da lista
        //cy.get('[class="product-block grid"]').contains('Atlas Fitness Tank').click() - pega o item pelo nome
    });

    //Somente este cenario será executado .only()
    it('Deve adicionar um produto ao carrinho', () => {

        var quantidade = 3

        cy.get('[class="product-block grid"]').eq(7).click()
        cy.get('.button-variable-item-L').click() //Seleciona o tamanho L
        cy.get('.button-variable-item-Purple').click() //Seleciona a cor roxa
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade) // Verifica se a quantidade foi adicionada
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.') //concatena a variavel com a mensagem
        
    });


    it.only('Deve adicionar produtos ao carrinho - Usando Comandos Customizaveis', () => {
        cy.addProdutos(5, '36', 'Blue', 3)   
    });



});