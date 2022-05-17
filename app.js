const os = require('os')
const sayHi = require('./module_2')
const path = require('path')


/*setInterval(() => {
    console.log('herro word')
}, 1000)
*/


sayHi.sayHi('Bilbo')

//console.log(os.type + " " + os.hostname + " " + os.platform + os.totalmem)
console.log(path.sep)
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const absolute = path.resolve(__dirname, 'nodepractice', 'app.js')
console.log(absolute)

const{readFileSync, writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second)

writeFileSync('./content/result.txt',
 `here is the result : ${first}, ${second}`,
 {flag: 'a'}
 )

 const http = require('http')

const server = http.createServer((req, res) =>{
        res.write("Did it work?")
        res.end()
})

server.listen(5000)