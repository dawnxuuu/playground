const { exec } = require('child_process')

const execProcess = exec('npm install signale', { stdio: 'pipe' })

execProcess.on('close', (code, signal) => { console.log('close 事件', `${code}=${signal}`) })
execProcess.on('disconnect', () => { console.log('disconnect 事件') })
execProcess.on('error', (error) => { console.log('error 事件'), `${error}` })
execProcess.on('exit', (code, signal) => { console.log('exit 事件', `${code}=${signal}`) })
execProcess.on('message', (message, sendHandle) => { console.log('message 事件', `${message}=${sendHandle}`) })

console.log('属性 channel', execProcess.channel)
console.log('属性 connected', execProcess.connected)
console.log('属性 killed', execProcess.killed)
console.log('属性 pid', execProcess.pid)

execProcess.stdout.on('data', (chunk) => { console.log('stdout 属性 data 事件', `${chunk}`) })
execProcess.stdout.on('error', (error) => { console.log('stdout 属性 error 事件', `${error}`) })
execProcess.stdout.on('close', () => { console.log('stdout 属性 close 事件') })
execProcess.stdout.on('end', () => { console.log('stdout 属性 end 事件') })

execProcess.stderr.on('data', (chunk) => { console.log('stderr 属性 data 事件', `${chunk}`) })
execProcess.stderr.on('error', (error) => { console.log('stderr 属性 error 事件', `${error}`) })
execProcess.stderr.on('close', () => { console.log('stderr 属性 close 事件') })
execProcess.stderr.on('end', () => { console.log('stderr 属性 end 事件') })

// execProcess.stdin.on()

// execProcess.disconnect()
// execProcess.kill()
