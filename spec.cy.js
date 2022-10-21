describe('Busca do google', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
  })

  it('faz uma pesquisa', () => {
    cy.get('input[name=q]').type('elemento')
  })

  it('wuhan', () => {
    cy.get('form').submit()
  })

  it('harem', () => {
    cy.visit('https://www.dicio.com.br/elemento/')
  })
})