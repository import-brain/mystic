/**
 * Removes duplicates from an array
 *
 * @param arr The array to remove duplicates from
 * 
 * @template T The type of the array
 * 
 * @returns A new array without the duplicates
 *
 */
function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export default removeDuplicates;
