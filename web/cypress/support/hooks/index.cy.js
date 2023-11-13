// O Cypress não roda os testes nessa pasta então ajustamos o arquivo cypress.config.js para que passasse a rodar

describe('Setup', () => {
    //Irá dropar o banco antes de iniciar os testes
    before(() => {
        //Função da biblioteca cypress-mongodb
        cy.dropCollection('orphanages')
    })

    //O before não funciona sozinho por isso adicionamos o it
    it('drop sucessfully', () => {
        cy.log('Drop successfully!')
    })
})