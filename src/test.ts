/* your code in typescript */
import { Graphic } from './lib/graphic'
import { Classes } from './lib/classes'

export namespace TestGraphic {

    export function main() { 

        const root = Graphic.recuperaTagHTML('root')
        const divTag = Graphic.creaDiv()
        const pTag = Graphic.creaParagrafo('ciao Mondo', {
            classes: Classes.add(['text-center']),
        })
        Graphic.inserisciTagHTML(root, divTag)
        const div = Graphic.recuperaTagHTML(divTag.elementID)
        Graphic.inserisciTagHTML(div, pTag)

        const tableTag = Graphic.creaTabella(['id', 'nome', 'cognome'], {
            classes: Classes.add(['table']),
        })
        Graphic.inserisciTagHTML(root, tableTag)

        Graphic.inserisciRecord(tableTag.elementID, ['1', 'Maurizio', 'Tolomeo'])
        Graphic.inserisciRecord(tableTag.elementID, ['2', 'Cecilia', 'Ferrulli'])

        const linkTag = Graphic.creaLink('clicca qui', 'https://www.google.it')
        Graphic.inserisciTagHTML(root, linkTag)

        const selectTag = Graphic.creaSelezione({
            classes: Classes.add(['form-control']),
        })
        Graphic.inserisciTagHTML(root, selectTag)
        Graphic.inserisciOptione(selectTag.elementID, 'maschio', 'm', false)
        Graphic.inserisciOptione(selectTag.elementID, 'femmina', 'f', true)

        const btnTag = Graphic.creaInput('button', 'btn', 'apri')
        Graphic.inserisciTagHTML(root, btnTag)
        Graphic.addEvent<HTMLButtonElement>(
            btnTag.elementID,
            'click',
            function (event) {
                console.log(event)
                window.alert('ciao')
            }
        )

        Graphic.addEvent<HTMLSelectElement>(
            selectTag.elementID,
            'change',
            function (event) {
                const target = event.target as HTMLSelectElement
                console.log(target.value)
            }
        )

    }
}