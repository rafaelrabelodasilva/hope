// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('goto', (url, latitude = -23.5970626, longitude = -46.690731) => {
    const mockGeolocation = (win, latitude, longitude) => {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition', cb => {
            return cb({coords: { latitude, longitude }});
        });
    };
    cy.visit(url, {
        onbeforeunload: win => {
            mockGeolocation(win, latitude, longitude)
        }
    })
})

Cypress.Commands.add('setMapPosition', (position) => {
    window.localStorage.setItem('hope-qa:latitude', position.latitude)
    window.localStorage.setItem('hope-qa:longitude', position.longitude)
})

Cypress.Commands.add('postOrphanage', (orphanage) => {

    //Coleta o arquivo e converte para binário porque a API precisa receber como binário
    cy.fixture('images/' + orphanage.image, 'binary') //Carrega o arquivo no formato binário
        .then((image) => Cypress.Blob.binaryStringToBlob(image, 'image/png'))
        .then((blob) => {
            const formData = new FormData();
            formData.append('name', orphanage.name);
            formData.append('description', orphanage.description);
            formData.append('latitude', orphanage.position.latitude);
            formData.append('longitude', orphanage.position.longitude);
            formData.append('opening_hours', orphanage.opening_hours);
            formData.append('open_on_weekends', true);
            formData.append('images', blob, orphanage.image)

            cy.request({
                url: 'http://localhost:3333/orphanages',
                method: 'POST',
                headers: {
                    'content-type': 'multipart/form-data'
                },
                body: formData
            }).then(response => {
                expect(response.status).to.eq(201)
            })
        })
})