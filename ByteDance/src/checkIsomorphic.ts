type Mapper = (i: any) => any

const map = (func: Mapper) => (target: any[]) => target.map(func)
const compose = (f: Function, g: Function) => f(g)
const higherOrderCompose = (f: Function, g: Function) => (...x: any) => f(g(...x))
const subtract = ([a, b]: number[]) => a - b
const subtractBy = (func: Mapper) => higherOrderCompose(subtract, compose(map, func))
const charCodeAt = (s: string, i: number) => s.charCodeAt(i)
const charCodeAtFirstLetter = (s: string) => charCodeAt(s, 0)
const higherOrderSubtractBy = (s: string) => (i: string) => subtractBy(charCodeAtFirstLetter)([i, s])
const stringToArray = (str: string) => [...str]
const mapString = (str: string, mapper: any) => stringToArray(str).map(mapper)
const join = (a: any[], sep: string) => a.join(sep)
const joinDirectly = (a: any[]) => join(a, '')
const structure = (s: string) => joinDirectly(mapString(s, higherOrderSubtractBy(s)))

const equal = ([a, b]: string[]) => a === b
const equalBy = (func: Mapper) => (a: string, b: string) => {
    return equal(compose(map, func)([a, b]))
}


export const checkIsomorphic = compose(equalBy, structure)
