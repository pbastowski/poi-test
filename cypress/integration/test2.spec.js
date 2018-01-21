describe('My First Test', function () {
    it('Checks the title', function () {
        cy.visit('/')
        cy.title().should('include', 'test2')

    })

    it('Contains', function () {
        cy.contains('This is')
    })

    it('Has 123 in the input and then gets cleared', function () {
        cy
            .get('input:first')
            .should('have.value', '123')
            .clear()
            .should('have.value', '')
    })

    it('Shows a new element when the button is clicked', function () {
        cy.get('button')
            .click({multiple: true})
            .get('div.lala')
            .contains('New stuff')
    })

    it('Click there menu item', function () {
        cy.get('.btn__content')
            .contains('There')
            .click({multiple: true, force: true})
            // .get('div.lala')
            // .contains('New stuff')
    })

    it('Click Here menu item', function () {
        cy.get('.btn__content')
            .contains('Here')
            .click({multiple: true, force: true})
            // .get('div.lala')
            // .contains('New stuff')
    })


})

