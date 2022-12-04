function fibo(num) {
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
    let x = fibo(i)
    res += x
    res = res.replace('.','')
    i++
  }
  
  if(res.length > size) {
    res = res.substring(0, size)
  }

  return res
}