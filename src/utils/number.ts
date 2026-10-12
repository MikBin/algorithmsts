export const getNthDigit = (n: number, digit: number): number => {
  return Math.floor(Math.abs(n) / 10 ** digit) % 10
}

export const digitCount = (num: number): number => {
  if (num === 0) {
    return 1
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1
}