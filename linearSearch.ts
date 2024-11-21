export default function linearSearch(arrNum: number[], needle: number): boolean {
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] === needle) {
            return true
        }
    }

    return false
}