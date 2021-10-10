
//@TODO move in number utils
export const getNthDigit = (n: number, digit: number): number => {
    return Math.floor(Math.abs(n) / (10 ** digit)) % 10;
}
export const digitCount = (num: number): number => {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


export const radixSortNumbers = (arr: number[]): number[] => {
    let arrayToSort = arr;
    let maxLength = String(Math.max(...arrayToSort)).length;

    for (let i = 0; i < maxLength; i++) {
        let buckets: number[][] = [...Array(10)].map(v => []);

        for (let j = 0; j < arrayToSort.length; j++) {
            let num = getNthDigit(arrayToSort[j], i);
            buckets[num].push(arrayToSort[j]);
        };

        arrayToSort = buckets.flat();
    };
    return arrayToSort;
};

export const radixSortStrings = (arr: string[]): string[] => {
    //get all unique char codes or chars...
    let arrayToSort = arr;
    let maxLength = 0;
    const charsSet: Set<number> = new Set();
    for (let i = 0; i < arr.length; i++) {
        const s = arr[i];
        const L = s.length;
        maxLength = Math.max(L, maxLength);
        for (let j = 0; j < L; j++) charsSet.add(s.charCodeAt(j));
    }
    const arrayOfCodes = [0, ...Array.from(charsSet)].sort();

    for (let i = 0; i < maxLength; i++) {
        let buckets: Record<number, string[]> = {};

        for (let j = 0; j < arrayToSort.length; j++) {
            let c = arrayToSort[j].charCodeAt(i);
            c = isNaN(c) ? 0 : c;
            if (!buckets[c]) buckets[c] = [];
            buckets[c].push(arrayToSort[j]);
        };

        arrayToSort = arrayOfCodes.map(c => buckets[c]).flat();
    };
    return arrayToSort;
};