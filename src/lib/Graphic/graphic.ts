export namespace Graphic {
    export interface HTMLObject {
        classes?: string
        disabled?: boolean
    }
    export interface ElementTag {
        elementID: string
        elementString: string
    }

    export interface TableTag {
        theadID?: string
        tbodyID?: string
    }

    export type TagName =
        | 'p'
        | 'span'
        | 'div'
        | 'table'
        | 'a'
        | 'select'
        | 'option'
        | 'tr'
        | 'input'
    export type Tag = {
        nameTag: TagName
    } & ElementTag &
        TableTag

    export function inserisciTagHTML(parent: HTMLElement | null, child: Tag) {
        if (parent !== null) parent.innerHTML += `${child.elementString}`
    }

    export function recuperaTagHTML(id: string) {
        return window.document.getElementById(id)
    }

    export function creaParagrafo(text: string, other?: HTMLObject): Tag {
        const id = 'p_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ``
        return {
            nameTag: 'p',
            elementID: id,
            elementString: `<p id="${id}" ${className}>${text}</p>`,
        }
    }

    export function creaSpan(text: string, other?: HTMLObject): Tag {
        const id = 'span_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ``
        return {
            nameTag: 'span',
            elementID: id,
            elementString: `<span id="${id}" ${className}>${text}</span>`,
        }
    }

    export function creaDiv(other?: HTMLObject): Tag {
        const id = 'div_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ``
        return {
            nameTag: 'div',
            elementID: id,
            elementString: `<div id="${id}" ${className}></div>`,
        }
    }

    export function creaTable(fields: string[], other?: HTMLObject): Tag {
        const className = other?.classes ? `class="${other?.classes}"` : ``
        const tableID = 'table_' + generateRandomString(10)
        const fieldsID = 'thead_' + generateRandomString(10)
        const recordsID = 'tbody_' + generateRandomString(10)
        let result = `<table id="${tableID}" ${className}><thead id="${fieldsID}"><tr>`
        for (const field of fields) {
            result += `<th>${field}</th>`
        }
        result += `</tr></thead><tbody id="${recordsID}"></tbody></table>`
        return {
            nameTag: 'table',
            elementID: tableID,
            elementString: result,
            theadID: fieldsID,
            tbodyID: recordsID,
        }
    }

    export function inserisciRecord(
        parentID: string,
        records: string[],
        other?: HTMLObject
    ): Tag {
        const className = other?.classes ? `class="${other?.classes}"` : ``
        const rowID = 'tr_' + generateRandomString(10)
        let result = `<tr id="${rowID}" ${className}>`
        for (const record of records) {
            result += `<td>${record}</td>`
        }
        result += `</tr>`
        const riga = window.document.getElementById(parentID)
        if (riga !== null) riga.innerHTML += result
        return {
            nameTag: 'tr',
            elementID: rowID,
            elementString: result,
        }
    }

    export function pulisciRecords(table: Tag) {
        const tableRecord = window.document.getElementById(table.elementID)
        if (tableRecord !== null) tableRecord.innerHTML = ''
    }

    export function creaLink(
        text: string,
        href?: string,
        target?: string,
        other?: HTMLObject
    ): Tag {
        const id = 'a' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ``
        const linkHref = href ? `href="${href}"` : ``
        const linkTarget = target ? `target="${target}"` : ``
        return {
            nameTag: 'a',
            elementID: id,
            elementString: `<a id="${id}" ${className} ${linkHref} ${linkTarget}>${text}</a>`,
        }
    }

    export function creaSelezione(other?: HTMLObject): Tag {
        const className = other?.classes ? `class="${other?.classes}"` : ``
        const selectID = 'select_' + generateRandomString(10)
        let result = `<select id="${selectID}" ${className}></select>`
        return {
            nameTag: 'select',
            elementID: selectID,
            elementString: result,
        }
    }

    export function inserisciOptione(
        selectID: string,
        label: string,
        value: any,
        selected: boolean,
        other?: HTMLObject
    ): Tag {
        const className = other?.classes ? `class="${other?.classes}"` : ``
        const optionID = 'option_' + generateRandomString(10)
        let result = selected
            ? `<option id="${optionID}" ${className} selected value="${value}">${label}</option>`
            : `<option id="${optionID}" ${className} value="${value}">${label}</option>`
        const select = window.document.getElementById(selectID)
        if (select !== null) select.innerHTML += result
        return {
            nameTag: 'option',
            elementID: optionID,
            elementString: result,
        }
    }

    export function creaInput(
        type: string,
        name: string,
        label: string,
        other?: HTMLObject
    ): Tag {
        const id = 'input_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ``
        const typeInput = type ? `type="${type}"` : ``
        const nameInput = name ? `name="${name}"` : ``
        const valueInput = label ? `value="${label}"` : ``
        return {
            nameTag: 'input',
            elementID: id,
            elementString: `<input id="${id}" ${className} ${typeInput} ${nameInput} ${valueInput}></input>`,
        }
    }

    export function creaButton(
        label: string,
        other?: HTMLObject
    ): Tag {
        const id = 'input_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ``
        const valueButton = label ? `class="${label}"` : ``
        return {
            nameTag: 'input',
            elementID: id,
            elementString: `<button id="${id}" ${className}>${valueButton}</button>`,
        }
    }

    export type TypeEvent =
        | 'click'
        | 'load'
        | 'change'
        | 'blur'
        | 'focus'
        | 'close'
        | 'dblclick'
        | 'keypress'
    export function addEvent(
        parentID: string,
        typeEvent: TypeEvent,
        callback: (this: HTMLElement, ev: Event | MouseEvent) => any
    ) {
        const element = window.document.getElementById(parentID)
        if (element !== null) element.addEventListener(typeEvent, callback)
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
