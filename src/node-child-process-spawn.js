const { spawn, exec } = require('child_process')

const spawnProcess = spawn('npm', ['install', 'signale'], { stdio: 'pipe' })

spawnProcess.on('close', (code, signal) => { console.log('close 事件', `${code}=${signal}`) })
spawnProcess.on('disconnect', () => { console.log('disconnect 事件') })
spawnProcess.on('error', (error) => { console.log('error 事件'), `${error}` })
spawnProcess.on('exit', (code, signal) => { console.log('exit 事件', `${code}=${signal}`) })
spawnProcess.on('message', (message, sendHandle) => { console.log('message 事件', `${message}=${sendHandle}`) })

console.log('属性 channel', spawnProcess.channel)
console.log('属性 connected', spawnProcess.connected)
console.log('属性 killed', spawnProcess.killed)
console.log('属性 pid', spawnProcess.pid)

spawnProcess.stdout.on('data', (chunk) => { console.log('stdout 属性 data 事件', `${chunk}`) })
spawnProcess.stdout.on('error', (error) => { console.log('stdout 属性 error 事件', `${error}`) })
spawnProcess.stdout.on('close', () => { console.log('stdout 属性 close 事件') })
spawnProcess.stdout.on('end', () => { console.log('stdout 属性 end 事件') })

spawnProcess.stderr.on('data', (chunk) => { console.log('stderr 属性 data 事件', `${chunk}`) })
spawnProcess.stderr.on('error', (error) => { console.log('stderr 属性 error 事件', `${error}`) })
spawnProcess.stderr.on('end', () => { console.log('stderr 属性 end 事件') })
spawnProcess.stderr.on('close', () => { console.log('stderr 属性 close 事件') })

// spawnProcess.stdin.on()

// spawnProcess.disconnect()
// spawnProcess.kill()
