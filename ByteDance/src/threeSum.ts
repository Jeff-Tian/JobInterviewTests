let findFrom = function (lessThanZeros: number[], greaterThanOrEqualToZeros: number[]) {
    const res = [];

    for (let i = 0; i < lessThanZeros.length; i++) {
        for (let j = 0; j < greaterThanOrEqualToZeros.length - 1; j++) {
            for (let k = j + 1; k < greaterThanOrEqualToZeros.length; k++) {
                if (lessThanZeros[i] + greaterThanOrEqualToZeros[j] + greaterThanOrEqualToZeros[k] === 0) {
                    let found = [lessThanZeros[i], greaterThanOrEqualToZeros[j], greaterThanOrEqualToZeros[k]].sort();

                    res.push(found.join(','))
                }
            }
        }
    }

    return res;
};

export const threeSum = (nums: number[]): Array<number[]> => {
    let res: Array<string> = [];

    const sorted = nums.sort()
    const lessThanZeros = sorted.filter(n => n < 0);
    const greaterThanOrEqualToZeros = sorted.filter(n => n >= 0);
    const equalToZeros = sorted.filter(n => n === 0);

    res = [...res, ...findFrom(lessThanZeros, greaterThanOrEqualToZeros)];
    res = [...res, ...findFrom(greaterThanOrEqualToZeros, lessThanZeros)];

    if (equalToZeros.length >= 3) {
        res.push([0, 0, 0].join(','))
    }

    return Array.from(new Set(res)).map(i => i.split(',').map(i => Number(i)));
}