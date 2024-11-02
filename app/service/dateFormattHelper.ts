export default function formatDate(array: string[] | undefined) {
  if (array) {
    const arr = array;
    const x = 1;

    const pos = 0;

    const temp = arr[x];

    let i;
    for (i = x; i >= pos; i--) {
      arr[i] = arr[i - 1];
    }

    arr[pos] = temp;

    return arr.join(" ");
  }
}
