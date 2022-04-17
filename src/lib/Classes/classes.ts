export namespace Classes {

    export function set(classes: string[]) {
        let array: string[] = []
        array = [...classes]
        return print(array)
    }

    export function get(classes: string) {
        let array: string[] = classes.split(' ')
        return array
    }

    export function remove(classes: string[], nameClass: string) {
        classes = classes.filter((elem) => elem !== nameClass)
        return print(classes)
    }

    export function removeAll(classes: string[]) {
        classes = []
        return print(classes)
    }

    export function print(array: string[]) {
        let result = ''
        if (array.length === 0) result += ``
        else if (array.length === 1) result += `${array[0].trim()}`
        else {
            for (const elem of array) result += `${elem.trim()} `
        }
        return result.trim()
    }
}
