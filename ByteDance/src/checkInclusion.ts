export const checkInclusion = (s1: string, s2: string) => {
    const permutations = getPermutations(s1)
    for (let p of Array.from(permutations)) {
        if (s2.indexOf(p) >= 0) {
            return true
        }
    }

    return false
}

export const swap = (s: string, index1: number, index2: number): string => {
    if (index1 === index2) return s
    if (index1 > index2) return swap(s, index2, index1)

    const first = s.substr(0, index1)
    const second = s.substring(index1 + 1, index2)
    const third = s.substr(index2 + 1)

    return first + s[index2] + second + s[index1] + third
}

export const getPermutations = (s: string): Set<string> => {
    if (s === '') {
        return new Set([])
    }

    if (s.length === 1) {
        return new Set([s])
    }

    const res: string[] = []

    for (let i = 0; i < s.length; i++) {
        let permutations = getPermutations(s.substr(0, i) + s.substr(i + 1))
        permutations.forEach(p => res.push(s[i] + p))
    }

    return new Set(res)
}
