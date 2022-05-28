export interface HTMLObject {
    classes?: string
    disabled?: boolean
    //TODO inserire altri attributi
}
export interface ElementTag {
    id: string
    html: string
}

//TODO aggiungere altri tag
export type tagType =
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
export type TagHTML = {
    type: tagType
    parent?: TagHTML
} & ElementTag

namespace Graphic {

    let rootHTMLElement: HTMLElement | null = null

    export function removeTag(tag: TagHTML) {
        const element = window.document.getElementById(tag.id)
        element?.remove()
    }

    export function removeTags(tags: TagHTML[]) {
        if (tags.length > 0) {
            tags.forEach(tag => {
                const element = window.document.getElementById(tag.id)
                element?.remove()
            })  
        }
    }

    export function createHTMLObject(
        classes: string,
        disabled: boolean = false
    ): HTMLObject{
        return {
            classes: classes ? classes : '',
            disabled: disabled
        }
    }

    export function addTags(parent: HTMLElement | null, childs: TagHTML[]) {
        if (parent !== null) {
            childs.forEach(child => {
                parent.innerHTML += `${child.html}`
            })  
        }
        else throw new Error('Not found parent HTMLElement')
    }

    export function addTagToParent(parent: TagHTML, child: TagHTML) {
        let temp = window.document.getElementById(parent.id)
        if (temp !== null) temp.innerHTML += `${child.html}`
        else throw new Error('No tag parent')
    }

    export function addTagsToParent(parent: TagHTML, childs: TagHTML[]) {
        let temp = window.document.getElementById(parent.id)
        if (temp !== null) {
            childs.forEach(child => {
                if (temp !== null) temp.innerHTML += `${child.html}`
            })
        } 
        else throw new Error('No tag parent')
    }

    export function addTagToRoot(child: TagHTML){
        if (rootHTMLElement !== null) rootHTMLElement.innerHTML += `${child.html}`
        else throw new Error('No tag root')
    }

    export function addTagsToRoot(childs: TagHTML[]){
        if (rootHTMLElement !== null) {
            childs.forEach(child => {
                if (rootHTMLElement !== null) 
                    rootHTMLElement.innerHTML += `${child.html}`
            })
        } 
        else throw new Error('No tag root')
    }

    export function setRoot(id: string) {
        let root = window.document.getElementById(id) 
        if(root !== null) rootHTMLElement = root
        else throw new Error('Not found root HTMLElement')
    }

    export function getRoot() {
        if (rootHTMLElement !== null) return rootHTMLElement
        else throw new Error('No tag root')
    }

    export type Size = '1' | '2' | '3' | '4' | '5' | '6' 
    export function createTitle(text: string, size: Size, other?: HTMLObject): TagHTML {
        const id = `h${size}_` + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        return {
            type: `h${size}`,
            id: id,
            html: `<h${size} id="${id}" ${className}>${text}</h${size}>`,
        }
    }

    export function createParagraph(text: string, other?: HTMLObject): TagHTML {
        const id = 'p_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        return {
            type: 'p',
            id: id,
            html: `<p id="${id}" ${className}>${text}</p>`,
        }
    }

    export function createSpan(text: string, other?: HTMLObject): TagHTML {
        const id = 'span_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        return {
            type: 'span',
            id: id,
            html: `<span id="${id}" ${className}>${text}</span>`,
        }
    }

    export function createDiv(other?: HTMLObject): TagHTML {
        const id = 'div_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        return {
            type: 'div',
            id: id,
            html: `<div id="${id}" ${className}></div>`,
        }
    }

    export function createTable(fields: string[], other?: HTMLObject): TagHTML {
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const tableID = 'table_' + generateRandomString(10)
        let result = `<table ${className}><thead><tr>`
        for (const field of fields) {
            result += `<th>${field}</th>`
        }
        result += `</tr></thead><tbody id="${tableID}"></tbody></table>`
        return {
            type: 'table',
            id: tableID,
            html: result,
        }
    }

    export function addRecordTable(
        parentID: string,
        records: string[],
        other?: HTMLObject
    ): TagHTML {
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
            type: 'tr',
            id: rowID,
            html: result,
        }
    }

    export function removeAllRecordsTable(table: TagHTML) {
        const tableRecord = window.document.getElementById(table.id)
        if (tableRecord !== null) tableRecord.innerHTML = ''
    }

    export function createLink(
        text: string,
        href?: string,
        target?: string,
        other?: HTMLObject
    ): TagHTML {
        const id = 'a' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const linkHref = href ? `href="${href}"` : ''
        const linkTarget = target ? `target="${target}"` : ''
        return {
            type: 'a',
            id: id,
            html: `<a id="${id}" ${className} ${linkHref} ${linkTarget}>${text}</a>`,
        }
    }

    export function createSelect(other?: HTMLObject): TagHTML {
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const selectID = 'select_' + generateRandomString(10)
        const result = `<select id="${selectID}" ${className}></select>`
        return {
            type: 'select',
            id: selectID,
            html: result,
        }
    }

    export function addOption(
        selectID: string,
        label: string,
        value: any,
        selected: boolean,
        other?: HTMLObject
    ): TagHTML {
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const optionID = 'option_' + generateRandomString(10)
        const result = selected
            ? `<option id="${optionID}" ${className} selected value="${value}">${label}</option>`
            : `<option id="${optionID}" ${className} value="${value}">${label}</option>`
        const select = window.document.getElementById(selectID)
        if (select !== null) select.innerHTML += result
        return {
            type: 'option',
            id: optionID,
            html: result,
        }
    }

    export function createInput(
        type: string,
        name: string,
        label: string,
        other?: HTMLObject
    ): TagHTML {
        const id = 'input_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const typeInput = type ? `type="${type}"` : ''
        const nameInput = name ? `name="${name}"` : ''
        const valueInput = label ? `value="${label}"` : ''
        return {
            type: 'input',
            id: id,
            html: `<input id="${id}" ${className} ${typeInput} ${nameInput} ${valueInput}></input>`,
        }
    }

    export function createButton(label: string, other?: HTMLObject): TagHTML {
        const id = 'input_' + generateRandomString(10)
        const className = other?.classes ? `class="${other?.classes}"` : ''
        const valueButton = label ? `class="${label}"` : ''
        const disabled = other?.disabled ? 'disabled' : ''
        return {
            type: 'input',
            id: id,
            html: `<button id="${id}" ${className} ${disabled}>${valueButton}</button>`,
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

export default Graphic