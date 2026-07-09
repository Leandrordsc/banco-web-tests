describe("Transferencias", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.fazerLoginComCredenciasValidas()
  });

  it("Deve transferir quando informo dados e valor validos", () => {
    cy.realizarTransferencia('Maria','João', '150')

    cy.verificarMensagemNoToast("Transferência realizada!")
  })
  it("Deve apresentar erro quanto tentar transferir valor maior que 5 mil sem o token", () => {
    cy.realizarTransferencia('João','Maria', '5000.01')
    cy.verificarMensagemNoToast("Autenticação necessária para transferências acima de R$5.000,00.")
  })
})
