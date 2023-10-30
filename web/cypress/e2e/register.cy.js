import data from '../fixtures/orphaneges.json'
import createPage from '../support/pages/create'
import mapPage from '../support/pages/map'

// import { faker } from '@faker-js/faker'

describe('Cadastro de orfanatos', () => {
    it('deve cadastrar um novo orfanato', () => {

        const orphanage = data.create

        //Biblioteca cypress-mongodb que deleta o registro em que o nome seja igual a massa de teste
        cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })

        createPage.go()
        cy.setMapPosition(orphanage.position)
        createPage.form(orphanage)
        createPage.submit()

        mapPage.popup.haveText('Orfanato cadastrado com sucesso.')

    })

    it('não deve cadastrar orfanato quando o nome é duplicado', () => {
        const orphanage = data.duplicate

        //Biblioteca cypress-mongodb que deleta o registro em que o nome seja igual a massa de teste
        cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })

        cy.postOrphanage(orphanage)

        createPage.go()
        cy.setMapPosition(orphanage.position)
        createPage.form(orphanage)
        createPage.submit()

        createPage.popup.haveText('Já existe um cadastro com o nome: ' + orphanage.name)
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