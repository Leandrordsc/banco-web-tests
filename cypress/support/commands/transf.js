Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor)=>{

    cy.selecionarFuncaoNaComboBox("conta-origem", contaOrigem)
    cy.selecionarFuncaoNaComboBox("conta-destino", contaDestino)
    cy.get("#valor").click().type(valor)
    cy.contains("button", "Transferir").click()

})