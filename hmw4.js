// membuat nilai acak
function createArrRandom(length) {
  const arrRandom = [];

  for (i = 0; i < length; i++) {
    const nilaiAcak = Math.floor(Math.random() * 50) + 1;

    arrRandom.push(nilaiAcak);
  }

  return arrRandom;
}

// membagi nilai acak menjadi 50 genap 50 ganjil
function distributionValue(inputArray) {
  const evenValue = [];
  const oddValue = [];
  for (let i = 1; i <= inputArray.length; i++)
    if (inputArray[i] % 2 === 0) {
      evenValue.push(inputArray[i]);
    } else if (inputArray[i] % 2 === 1) {
      oddValue.push(inputArray[i]);
    }

  return [evenValue, oddValue];
}

// nilai minimum untuk nilai genap dan ganjil

function findMinValue(inputArray) {
  let minArr = inputArray[0];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < minArr) {
      minArr = inputArray[i];
    }
  }

  return minArr;
}

// nilai maksimum untuk nilai genap dan ganjil
function findMaxValue(inputArray) {
  let maxArr = inputArray[0];
  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > maxArr) {
      maxArr = inputArray[i];
    }
  }

  return maxArr;
}

// total nilai genap dan ganjil
function total(inputArray) {
  let calculate = inputArray[0];

  for (let i = 0; i < inputArray.length; i++) {
    calculate += inputArray[i];
  }
  return calculate;
}

// rata-rata
function rataRata(inputArray) {
  const nilaiRataRata = total(inputArray);

  return nilaiRataRata / inputArray.length;
}

const angkaRandom = createArrRandom(100);
const [evenValue, oddValue] = distributionValue(angkaRandom);
const minEven = findMinValue(evenValue);
const minOdd = findMinValue(oddValue);
const maxEven = findMaxValue(evenValue);
const maxOdd = findMaxValue(oddValue);
const evenTotal = total(evenValue);
const oddTotal = total(oddValue);
const evenAverage = rataRata(evenValue);
const oddAverage = rataRata(oddValue);

// perbandingan
const perbandingan = {
  min:
    minEven > minOdd
      ? "Nilai Min Yang lebih besar adalah array Genap"
      : "Nilai Min Yang lebih besar adalah array Ganjil",
  max:
    maxEven > maxOdd
      ? "Nilai Max Yang lebih besar adalah array Genap"
      : "Nilai Max Yang lebih besar adalah array Ganjil",
  total:
    evenTotal === oddTotal
      ? "Total memiliki nilai sama antara array genap dan ganjil"
      : "Total memiliki nilai berbeda antara array genap dan ganjil",
  rataRata:
    evenAverage > oddAverage
      ? "Nilai Rata-rata Yang lebih besar adalah array Genap"
      : "Nilai Rata-rata Yang lebih besar adalah array Ganjil",
};

console.log(`ini nilai random dari 1 sampai 50 :`, angkaRandom);
console.log(`ini nilai genap :`, evenValue);
console.log(`ini nilai ganjil :`, oddValue);
console.log(`ini nilai min genap :`, minEven);
console.log(`ini nilai min ganjil :`, minOdd);
console.log(`ini nilai max genap :`, maxEven);
console.log(`ini nilai max ganjil :`, maxOdd);
console.log(`ini total nilai genap :`, evenTotal);
console.log(`ini total nilai ganjil :`, oddTotal);
console.log(`ini nilai rata-rata angka genap:`, evenAverage);
console.log(`ini nilai rata-rata angka ganjil:`, oddAverage);
console.log(perbandingan);
