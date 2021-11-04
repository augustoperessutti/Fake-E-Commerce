export function getQuantity(arr, value) {
    return arr.filter((v) => (v === value)).length;
}