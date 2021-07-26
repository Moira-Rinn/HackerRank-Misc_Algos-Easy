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

plusMinus([-4, 3, -9, 0, 4, 1]);


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


function candles(arr){
  arr.sort((a,b)=>a-b);
  let count=0;
  let temp=arr[arr.length-1];
  for(let i=arr.length-1;i>=0;i--){
    if(arr[i]==temp){
      count++;
    }else{
      return count;
    }
  }
  return count;
}

console.log(candles([4]));


function convertTime(s){
  if(s[s.length-2]=='A'&&s[0]=='1'&&s[1]=='2'){
      let arr=s.split("");
      arr[0]='0';
      arr[1]='0';
      s=arr.join("");
      return s.slice(0, 8);
    }else if(s[s.length-2]=='P'&&s[0]=='1'&&s[1]=='2') {
      return s.slice(0, 8);
    }else if(s[s.length-2]=='P'){
      let arr=s.split("");
      arr[0]=parseInt(arr[0])+1;
      arr[1]=parseInt(arr[1])+2;
      arr[0]=arr[0].toString();
      arr[1]=arr[1].toString();
      s=arr.join("")
      return s.slice(0, 8);
    }else{
      return s.slice(0, 8);
    }
}
console.log(convertTime("07:05:45PM"));