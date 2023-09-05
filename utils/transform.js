
export function transform(value) {
    const number = Number(value)
    if (!isNaN(number) && !isNaN(parseFloat(value))) {
        return number
    }

    if (value === 'true') {
        return true
    }

    if (value === 'false') {
        return false
    }

    if (value === 'null' || value === '') {
        return null
    }

    if (value[0] === '{' || value[0] === '[') {
        return JSON.parse(value)
    }

    return value
}
