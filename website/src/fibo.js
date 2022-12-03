function fibo(start) {
    if(start === 0) return 0
    if(start === 1) return 1
    return fibo(start-1) + fibo(start-2)
}

function calculate(start, size) {
    let res = ''
    let i = start
    while(res.length() < size) {
        res += fibo(i)
        i++
    }
    
    if(res.length > size) {
        res = res.substring(0, size)
    }
}