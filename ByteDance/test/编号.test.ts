import { addSerials } from "../src/addSerials"

describe.only('编号', () => {
    it('加序号', () => {
        const res = addSerials(['ab', 'c', 'ab', 'd', 'c'])
        expect(res).toEqual(['ab1', 'c1', 'ab2', 'd', 'c2'])
    })
})