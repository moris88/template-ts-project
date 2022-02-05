export namespace Graphic {
    export interface HTMLObject {
        classes?: string
        disabled?: boolean
    }

    export function creaP(
        parent: HTMLElement,
        text: string,
        other?: HTMLObject
    ) {
        const id = 'p_' + generateRandomString(10)
        parent.innerHTML += `<p id="${id}" class="${other?.classes}">${text}</p>`
        return window.document.getElementById(id) as HTMLParagraphElement
    }

    export function inserisciChildDiv(parent: HTMLDivElement,child: HTMLElement){
        parent.innerHTML += `${child}`
    }

    export function creaDiv(
        parent: HTMLElement,
        other?: HTMLObject
    ) {
        const id = 'div_' + generateRandomString(10)
        parent.innerHTML += `<div id="${id}" class="${other?.classes}"></div>`
        return window.document.getElementById(id) as HTMLDivElement
    }

    export function creaTable(
        parent: HTMLElement,
        fields: string[],
        other?: HTMLObject
    ) {
        const tableID = 'table_' + generateRandomString(10)
        const recordsID = 'tbody_' + generateRandomString(10)
        let result = `<table id="${tableID}" class="${other?.classes}"><thead><tr>`
        for (const field of fields) {
            result += `<th>${field}</th>`
        }
        result += `</tr></thead><tbody id="${recordsID}"></tbody></table>`
        parent.innerHTML += result
        return {
            tableID: window.document.getElementById(tableID),
            recordsID: window.document.getElementById(recordsID),
        }
    }

    export function inserisciRecordsTable(
        tableRecord: HTMLElement,
        records: string[],
        other?: HTMLObject
    ) {
        let result = `<tr class="${other?.classes}">`
        for (const record of records) {
            result += `<td>${record}</td>`
        }
        result += `</tr>`
        tableRecord.innerHTML += result
    }

    export function pulisciRecordsTable(tableRecord: HTMLElement){
        tableRecord.innerHTML = ''
    }
}

const generateRandomString = (num: number) => {
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    const charactersLength = characters.length
    for (let i = 0; i < num; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }

    return result
}
