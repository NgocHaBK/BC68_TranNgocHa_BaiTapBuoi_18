let arrOfNum = [];
let negativeNumber = 0,
  trackUp_index = 0;

document.getElementById("btn_Nhap").onclick = () => {
  let num = document.getElementById("soN").value * 1;
  if (typeof num == "number") arrOfNum.push(num);
  document.getElementById("soN").value = "";
 
  console.log(arrOfNum);
};
document.getElementById("btn_sum").onclick = () => {
  let sum = 0;
  arrOfNum.forEach((data, index) => {
    if (data > 0) sum += data;
  });

  document.getElementById(
    "sumRes"
  ).innerText = `- Kết quả tổng các số trong mảng là: ${sum}.`;
};
document.getElementById("btn_soDuong").onclick = () => {
  let length_ = arrOfNum.length,
    temp_index = trackUp_index;
  if (trackUp_index == 0) {
    arrOfNum.forEach((data, index) => {
      if (data > 0) {
        ++negativeNumber;
      }
      ++trackUp_index;
    });
  } else {
    for (; temp_index < length_; temp_index++) {
      if (arrOfNum[temp_index] > 0) ++negativeNumber;
    }
    trackUp_index = temp_index;
  }

  document.getElementById(
    "numOfNeg"
  ).innerText = ` - Số các số dương có trong mảng là: ${negativeNumber}.`;
};
document.getElementById("btn_min").onclick = () => {
  if (arrOfNum.length != 0) {
    let min_ = arrOfNum[0];

    for (let idx in arrOfNum) {
      if (idx != 0) {
        if (arrOfNum[idx] < min_) min_ = arrOfNum[idx];
      }
    }
    document.getElementById(
      "minNumber"
    ).innerText = ` - Giá tri nhỏ nhất trong mảng của bạn là: ${min_}.`;
  } else {
    alert("Mảng của bạn chưa có giá trị nào!");
  }
};
document.getElementById("btn_minPos").onclick = () => {
  let idx = -1,
    max_number = Number.MAX_SAFE_INTEGER;
  arrOfNum.forEach((dat, index) => {
    if (dat > 0 && dat < max_number) {
      idx = index;
      max_number = dat;
    }
  });
  if (idx != -1)
    document.getElementById(
      "minPosNum"
    ).innerText = `- Số dương nhỏ nhất trong mảng là: ${
      arrOfNum[idx]
    } tại ví trị ${idx + 1}..`;
  else
    document.getElementById(
      "minPosNum"
    ).innerText = `- Không tồn tại số dương trong mảng.`;
};
function isValid(a) {
  return a >= 0 && a < arrOfNum.length;
}
document.getElementById("btn_lastEvenNumber").onclick = () => {
  let arrlength = arrOfNum.length;
  let idx = -1;
  for (i = arrlength - 1; i >= 0; i--) {
    if (!(arrOfNum[i] & 1)) {
      idx = i;
      break;
    }
  }
  if (idx != -1)
    document.getElementById(
      "lastEvenNumb"
    ).innerText = ` - Số chẵn cuối cùng trong mảng là: ${arrOfNum[idx]}.`;
  else
    document.getElementById("lastEvenNumb").innerText =
      "Mảng của bạn không tồn tại số chẵn nào!";
};

document.getElementById("btn_Swap").onclick = () => {
  let fNumb = document.getElementById("so1").value * 1 - 1,
    seNumb = document.getElementById("so2").value * 1 - 1;
  document.getElementById("so1").value = "";
  document.getElementById("so2").value = "";
  document.getElementById(
    "swapping"
  ).innerText = ` Mảng trước khi swapping: ${arrOfNum}.`;
  if (!isValid(fNumb) || !isValid(seNumb))
    alert(`Vị trị bạn muốn swap không hợp lệ! (0 - ${arrOfNum.length - 1})`);
  let temp = arrOfNum[fNumb];
  arrOfNum[fNumb] = arrOfNum[seNumb];
  arrOfNum[seNumb] = temp;
  document.getElementById(
    "swapping"
  ).innerHTML += ` </br> Mảng sau khi swapping: ${arrOfNum}.`;
};
function Merge(initArr, leftIndex, midIndex, rightIndex) {
  let leftArr_index = midIndex - leftIndex + 1;
  let rightArr_index = rightIndex - midIndex;
  let leftArr = new Array(leftArr_index);
  let rightArr = new Array(rightArr_index);

  for (let i = 0; i < leftArr_index; i++) {
    leftArr[i] = initArr[leftIndex + i];
  }
  for (let k = 0; k < rightArr_index; k++) {
    rightArr[k] = initArr[midIndex + 1 + k];
  }

  let i = 0,
    j = 0,
    startIndex = leftIndex;
  while (i < leftArr_index && j < rightArr_index) {
    if (leftArr[i] <= rightArr[j]) {
      initArr[startIndex++] = leftArr[i++];
    } else {
      initArr[startIndex++] = rightArr[j++];
    }
  }
  while (i < leftArr_index) {
    initArr[startIndex++] = leftArr[i++];
  }
  while (j < rightArr_index) {
    initArr[startIndex++] = rightArr[j++];
  }
}

function MergeSort(arr, begin, end) {
  if (begin >= end) return;
  let mid = begin + parseInt((end - begin) / 2);
  MergeSort(arr, begin, mid);
  MergeSort(arr, mid + 1, end);
  Merge(arr, begin, mid, end);
}

document.getElementById("btn_Sort").onclick = () => {
  document.getElementById(
    "sorting"
  ).innerText = ` Mảng ban đầu là: ${arrOfNum}.`;
  let new_arr = [...arrOfNum];
  MergeSort(new_arr, 0, new_arr.length - 1);
  document.getElementById(
    "sorting"
  ).innerHTML += ` </br> Mảng sau khi được sắp xếp là: ${new_arr}.`;
};

let arrSNT = new Array(1000000).fill(1);
arrSNT[0] = arrSNT[1] = 0;
function sangSNT() {
  for (let i = 2; i <= 1000; i++){
    if (arrSNT[i]) {
      for (let j = i * i; j <= 1000000; j += i){
        arrSNT[j] = 0;
      }
    }
  }
};
document.getElementById("btn_SNT").onclick = () => {
  sangSNT();
  let flag = -1;
  for (let data of arrOfNum) {
    if (arrSNT[data]) {
      flag = 1;
      document.getElementById("SNT").innerText = ` Số nguyên tố dầu tiên trong mảng là: ${data}.`;
      break;
    }
  }
  if(flag==-1) document.getElementById("SNT").innerText="Mảng của bạn không có số nguyên tố!"
};
let PosCnt = 0, NegCnt = 0;
document.getElementById("soSoNguyen").onclick = () => {
  let count = 0;
  arrOfNum.forEach((data, index) => {
    if ((parseInt(data) - data) == 0) count++;
  })
  document.getElementById("SoNguyen").innerText=` Số các số nguyên có trong mảng là: ${count}. `;
};
document.getElementById("soSanh").onclick = () => {
  let p_tag = document.getElementById("soSanhQuan");
   arrOfNum.forEach((data, index) => {
     if (data > 0) PosCnt++;
     else NegCnt++;
   });
  if(PosCnt>NegCnt)
    p_tag.innerText = " Số lượng số dương nhiều hơn số lượng số âm có trong mảng.";
  else if(PosCnt<NegCnt)
    p_tag.innerText =
      " Số lượng số âm nhiều hơn số lượng số dương có trong mảng.";
  else p_tag.innerText =
    " Số lượng số dương bằng số lượng số âm có trong mảng.";
  PosCnt = NegCnt = 0;
};