
// 📌  F-Task: findDoublers function tuzing,
// unga faqat bitta string argument pass bolib, agar
//  stringda bir hil harf qatnashgan bolsa true,
//   qatnashmasa false qaytarishi kerak.
// masalan: getReverse("hello") return true return qiladi

function finDoublers(smt) {
  return smt.split("").map((e,index,arr) => (arr.includes(e,index +1))).includes(true);
}

console.log(finDoublers("hello"));
