let arr1=[
  [1,2,3,4],
  [5,6,7,8],
  [4,3,2,1],
  [8,7,6,5]
];
let sum1 = 0;
for(let i=0;i<arr1.length;i++){
  sum1+=arr1[i][i];
}
let j=0;
for(i=arr1.length-1;i>=0;i--){
  sum1-=arr1[i][j];
  j++;
}
console.log(Math.abs(sum1));


function plusMinus(arr) {
  let ctPos=0, ctNeg=0, ctZero=0
  arr.forEach(val=>{
      if(val>0){
          ctPos++;
      } else if (val<0){
          ctNeg++;
      } else {
          ctZero++;
      }
  });
  console.log((ctPos/arr.length).toFixed(6));
  console.log((ctNeg/arr.length).toFixed(6));
  console.log((ctZero/arr.length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1])

function staircase(n){
  let arr=[];
  for(let i=0;i<n;i++){
    arr.push(" ");
  }
  for(let i=0;i<n;i++){
    arr.shift();
    arr.push("#");
    console.log(arr.join(""));
  }
}

staircase(4);

function minMax(arr){
  let min=0;
  let max=0;
  arr.sort((a,b)=>a-b)
  for(let i=0;i<arr.length-1;i++){
    min+=arr[i];
  }
  for(let i=1;i<arr.length;i++){
    max+=arr[i];
  }
  console.log(min, max);
}
minMax([1,2,3,4,5]);