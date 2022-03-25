export namespace Graphic {
    export interface HTMLObject {
        classes?: string
        disabled?: boolean
    }
    export interface ElementTag {
        elementID: string
        elementString: string
    }

    export type TagName =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
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
    } & ElementTag

    export function inserisciTagHTML(parent: HTMLElement | null, child: Tag) {
        if (parent !== null) parent.innerHTML += `${child.elementString}`
    }

    export function recuperaTagHTML(id: string) {
        return window.document.getElementById(id)
    }

    export type Grandezza = '1' | '2' | '3' | '4' | '5' | '6' 
    export function creaTitolo(text: string, grandezza: Grandezza, other?: HTMLObject): Tag {
        const id = `h${grandezza}_` + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        return {
            nameTag: `h${grandezza}`,
            elementID: id,
            elementString: `<h${grandezza} id="${id}" ${className}>${text}</h${grandezza}>`,
        }
    }

    export function creaParagrafo(text: string, other?: HTMLObject): Tag {
        const id = 'p_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        return {
            nameTag: 'p',
            elementID: id,
            elementString: `<p id="${id}" ${className}>${text}</p>`,
        }
    }

    export function creaSpan(text: string, other?: HTMLObject): Tag {
        const id = 'span_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        return {
            nameTag: 'span',
            elementID: id,
            elementString: `<span id="${id}" ${className}>${text}</span>`,
        }
    }

    export function creaDiv(other?: HTMLObject): Tag {
        const id = 'div_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        return {
            nameTag: 'div',
            elementID: id,
            elementString: `<div id="${id}" ${className}></div>`,
        }
    }

    export function creaTabella(fields: string[], other?: HTMLObject): Tag {
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const tableID = 'table_' + generateRandomString(10)
        let result = `<table ${className}><thead><tr>`
        for (const field of fields) {
            result += `<th>${field}</th>`
        }
        result += `</tr></thead><tbody id="${tableID}"></tbody></table>`
        return {
            nameTag: 'table',
            elementID: tableID,
            elementString: result,
        }
    }

    export function inserisciRecord(
        parentID: string,
        records: string[],
        other?: HTMLObject
    ): Tag {
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const rowID = 'tr_' + generateRandomString(10)
        let result = `<tr id="${rowID}" ${className}>`
        for (const record of records) {
            result += `<td>${record}</td>`
        }
        result += '</tr>'
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
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const linkHref = href ? `href="${href}"` : ''
        const linkTarget = target ? `target="${target}"` : ''
        return {
            nameTag: 'a',
            elementID: id,
            elementString: `<a id="${id}" ${className} ${linkHref} ${linkTarget}>${text}</a>`,
        }
    }

    export function creaSelezione(other?: HTMLObject): Tag {
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const selectID = 'select_' + generateRandomString(10)
        const result = `<select id="${selectID}" ${className}></select>`
        return {
            nameTag: 'select',
            elementID: selectID,
            elementString: result,
        }
    }

    export function inserisciOpzione(
        selectID: string,
        label: string,
        value: any,
        selected: boolean,
        other?: HTMLObject
    ): Tag {
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const optionID = 'option_' + generateRandomString(10)
        const result = selected
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
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const typeInput = type ? `type="${type}"` : ''
        const nameInput = name ? `name="${name}"` : ''
        const valueInput = label ? `value="${label}"` : ''
        return {
            nameTag: 'input',
            elementID: id,
            elementString: `<input id="${id}" ${className} ${typeInput} ${nameInput} ${valueInput}></input>`,
        }
    }

    export function creaButton(label: string, other?: HTMLObject): Tag {
        const id = 'input_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const valueButton = label ? `class="${label}"` : ''
        const disabled = other?.disabled ? 'disabled' : ''
        return {
            nameTag: 'input',
            elementID: id,
            elementString: `<button id="${id}" ${className} ${disabled}>${valueButton}</button>`,
        }
    }

    export type TypeEvent =
        | 'click'
        | 'load'
        | 'change'
        | 'blur'
        | 'focus'
        | 'dblclick'
        | 'keypress'
    export function addEvent<
        K extends
            | HTMLInputElement
            | HTMLSelectElement
            | HTMLButtonElement
            | HTMLAnchorElement
    >(
        parentID: string,
        typeEvent: TypeEvent,
        callback: (this: K, event: Event) => any
    ) {
        const element = window.document.getElementById(parentID) as K
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
