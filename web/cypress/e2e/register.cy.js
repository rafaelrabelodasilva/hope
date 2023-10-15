import data from '../fixtures/orphaneges.json'

describe('Cadastro de orfanatos', () => {
    it('deve cadastrar um novo orfanato', () => {

        const orphanage = data.create

        cy.visitWithMockGeolocation('http://localhost:3000/orphanages/create')

        cy.get('legend')
            .should('be.visible')
            .should('have.text', 'Cadastro')

        cy.get('input[name=name]')
            .type(orphanage.name)

        cy.get('#description')
            .type(orphanage.description)

        cy.get('input[type=file]')
            .selectFile('cypress/fixtures/images/kids-playground-1.png', {force: true})

        cy.get('#opening_hours')
            .type(orphanage.opening_hours)

        cy.contains('button', orphanage.open_on_weekends)
            .click()

        cy.get('.save-button').click()
    })
})

//Comando para setar as coordenadas geográficas
Cypress.Commands.add('visitWithMockGeolocation', (url, latitude = -23.5970626, longitude = -46.690731) => {
    cy.window().then(win => {
        const mockGeolocation = {
            getCurrentPosition: (callback) => {
                return callback({
                    coords: {
                        latitude,
                        longitude
                    }
                });
            }
        };
        cy.stub(win.navigator.geolocation, 'getCurrentPosition', mockGeolocation.getCurrentPosition);
        cy.visit(url);
    });
});
