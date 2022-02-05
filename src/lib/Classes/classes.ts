export namespace Classes {
    let array: string[] = []

    export function add(classes: string[]) {
        array = [...classes]
        return get()
    }

    export function get() {
        let result = ''
        if (array.length === 0) result += ``
        if (array.length === 1) result += `${array[0]}`
        else {
            for (const elem of array) result += `${elem} `
        }
        return result
    }
}
