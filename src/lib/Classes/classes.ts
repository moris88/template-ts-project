export namespace Classes {
    let array: string[] = []

    export function add(classes: string[]) {
        array = [...classes]
        return print()
    }

    export function get(name: string) {
        return array.find((elem) => elem === name)
    }

    export function remove(name: string) {
        array = array.filter((elem) => elem !== name)
        return print()
    }

    export function removeAll() {
        array = []
        return print()
    }

    export function print() {
        let result = ''
        if (array.length === 0) result += ``
        if (array.length === 1) result += `${array[0]}`
        else {
            for (const elem of array) result += `${elem} `
        }
        return result.trim()
    }
}
