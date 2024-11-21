export default function binarySearch(arrNum: number[], needle: number): boolean {
    let lo = 0
    let hi = arrNum.length

    do {
        const m = Math.floor(lo + (hi - lo) / 2)
        const v = arrNum[m]

        if (v === needle) {
            return true
        } else if (v > needle) {
            hi = m
        } else {
            lo = m + 1
        }

    } while (lo < hi)
    return false
}