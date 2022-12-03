function fibo(start) {
  if(start === 0) return 0
  if(start === 1) return 1
  return fibo(start-1) + fibo(start-2)
}

function fibo2(num) {
  let x=1, y=0, temp

  while(num >= 0){
    temp=x;
    x=x+y;
    y=temp;
    num--;
  }

  return y;
}

export default function calculate(start, size) {
  let res = ''
  let i = start
  while(res.length < size) {
    let x = fibo2(i)
    console.log(x)
    res += x
    res = res.replace('.','')
    i++
  }
  
  if(res.length > size) {
    res = res.substring(0, size)
  }

  return res
}