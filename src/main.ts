/* your code in typescript */

import { Graphic } from './lib/Graphic/graphic'

const root = window.document.getElementById('root') as HTMLElement

const div = Graphic.creaDiv(root)
let p: HTMLParagraphElement | null
if (div !== null) {
    p = Graphic.creaP(div, 'ciao Mondo')
    if (p !== null) {
        Graphic.inserisciChildDiv(div, p)
    }
}

const table = Graphic.creaTable(root, ['id', 'nome', 'cognome'], {
    classes: 'table',
})

const riga = table.recordsID

if (riga !== null) {
    Graphic.inserisciRecordsTable(riga, ['1', 'Maurizio', 'Tolomeo'])
    Graphic.inserisciRecordsTable(riga, ['2', 'Cecilia', 'Ferrulli'])
}
