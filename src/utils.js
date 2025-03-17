export function randomFromArray(array) {
    if (array.length === 0) {
        return null; // Return null if the array is empty
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};
export function stealRandomFromArray(array, garray) {
    if (array.length === 0) {
        return null; // Return null if the array is empty
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    array.splice(randomIndex, 1);
    garray.push(array[randomIndex])
    return array[randomIndex];
}