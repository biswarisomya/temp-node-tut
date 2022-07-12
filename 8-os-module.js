
const os= require('os')

const user=os.userInfo()
console.log(user)

console.log(`the sysem uptime is ${os.uptime()} secs`)

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freeMem(),
}
console.log(currentOS)