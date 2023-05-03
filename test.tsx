// membuat pengecekan ketika nanti dibaca secara terbalik dan jika nilainya dari input itu sama dengan output bernilai sama maka valuenya true begitupun sebaliknya

// function checkReversedString(words) {
//   let newReversedWords = "";
//   for (let i = words.length - 1; i >= 0; i--) {
//     newReversedWords += words[i];
//   }
//   return words === newReversedWords;
// }

// console.log(checkReversedString("buku"));
// // console.log(checkReversedString("katik"));

// function checkReversedString(words) {
//   for (let i = 0; i < words.length / 2; i++) {
//     if (words[i] !== words[words.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkReversedString("mobil"));
// console.log(checkReversedString("katak"));

// Buat aplikasi penjumlahan diagonal array 3 x 3
// Contoh
// 11 2 4
// 4 5 6
// 10 8 12

// Jumlahkan diagonal kekanan, A = 11 + 5 + 12 = 28
// Jumlahkan diagonal kekiri, B = 4 + 5 + 10 = 19
// Jumlahkan kedua hasil diagonal A + B = 28 + 19 = 47

function sumTwoDiagonalArr(arr) {
  let arrSum1 = 0;
  let arrSum2 = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum1 += arr[i][i];
    arrSum2 += arr[i][arr.length - 1 - i];
    // arrSum1 = arr[i][i] + arr[i + 1][i + 1] + arr[i + 2][i + 2];
    // arrSum2 = arr[i][0] + arr[i + 1][1] + arr[i + 2][2];
  }
  return (result = arrSum1 + arrSum2);
}
console.log(
  sumTwoDiagonalArr([
    [11, 2, 4, 6],
    [4, 5, 6, 1],
    [10, 8, 12, 2],
    [5, 9, 7, 2],
  ])
);
