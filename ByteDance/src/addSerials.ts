export const addSerials = (a: string[]) => {
    const stats = a.reduce((prev: any, next) => {
        prev[next] = -~prev[next];

        return prev;
    }, {})

    Object.keys(stats).forEach(key => {
        if (stats[key] === 1) {
            stats[key] = ''
        }
    })

    let res = [];

    for (let i = a.length - 1; i >= 0; i--) {
        res.unshift(a[i] + stats[a[i]])
        stats[a[i]]--;
    }

    return res;
}