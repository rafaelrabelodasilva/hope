import { generator } from '../support/factory'

describe('Cadastro de orfanatos', () => {

    it('deve cadastrar um novo orfanato', () => {
        const orphanage = generator()

        // console.log(JSON.stringify(orphanage))

        // Como a massa de contatos é dinâmica por conta da função generate não precisamos ficar apagando as informações já que vão ser aleatórias
        //cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })

        cy.gotoCreate(orphanage.position)
        cy.createOrphanage(orphanage)
        cy.popupHaveText('Orfanato cadastrado com sucesso.')
    })

    it('não deve cadastrar orfanato quando o nome é duplicado', () => {
        const orphanage = generator()
        //Biblioteca cypress-mongodb que deleta o registro em que o nome seja igual a massa de teste

        cy.postOrphanage(orphanage)

        cy.gotoCreate(orphanage.position)
        cy.createOrphanage(orphanage)
        cy.popupHaveText('Já existe um cadastro com o nome: ' + orphanage.name)
    })

    context('campos obrigatórios', () => {
        it('não deve cadastrar se o nome não for preenchido', () => {

            let orphanage = generator()
    
            delete orphanage.name
    
            cy.log(JSON.stringify(orphanage))
    
            cy.gotoCreate(orphanage.position)
            cy.createOrphanage(orphanage)
            cy.alertHaveText('Nome', 'Campo obrigatório')
        })
    
        it('não deve cadastrar se sobre não for preenchido', () => {
    
            let orphanage = generator()
    
            delete orphanage.description
    
            cy.log(JSON.stringify(orphanage))
    
            cy.gotoCreate(orphanage.position)
            cy.createOrphanage(orphanage)
            cy.alertHaveText('Sobre', 'Campo obrigatório')
        })
    
        it('não deve cadastrar não anexar a imagem', () => {
    
            let orphanage = generator()
    
            delete orphanage.image
    
            cy.log(JSON.stringify(orphanage))
    
            cy.gotoCreate(orphanage.position)
            cy.createOrphanage(orphanage)
            cy.alertHaveText('Fotos', 'Envie pelo menos uma foto')
        })
    
        it('não deve cadastrar se o horário não for informado', () => {
    
            let orphanage = generator()
    
            delete orphanage.opening_hours
    
            cy.log(JSON.stringify(orphanage))
    
            cy.gotoCreate(orphanage.position)
            cy.createOrphanage(orphanage)
            cy.alertHaveText('Horário', 'Campo obrigatório')
        })
    
        it('não deve cadastrar os campos obrigatórios não forem preenchidos', () => {
    
            let orphanage = generator()
    
            delete orphanage.name
            delete orphanage.description
            delete orphanage.image
            delete orphanage.opening_hours
    
            cy.log(JSON.stringify(orphanage))
    
            cy.gotoCreate(orphanage.position)
            cy.createOrphanage(orphanage)
    
            cy.alertHaveText('Nome', 'Campo obrigatório')
            cy.alertHaveText('Sobre', 'Campo obrigatório')
            cy.alertHaveText('Fotos', 'Envie pelo menos uma foto')
            cy.alertHaveText('Horário', 'Campo obrigatório')
        })
    })
})
