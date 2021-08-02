var express = require('express')

var { createProxyMiddleware } = require('http-proxy-middleware');
var app = express()





app.use(express.static('./dist'))

app.use('/', createProxyMiddleware({
  target: "http://8.140.28.179:8099/",
  changeOrigin: true
}));

// app.get('/', (req, res) => {
//   res.send(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <title>Document</title>
//     </head>
//     <body>
//         2423
//     </body>
//     </html>`)
// })

// app.get('/list', (req, res) => {

//   res.end('list')
// })

app.listen(3000, function (err) {
  if (err) {
    console.log(err)
  }
  console.log('listen http://localhost' + 8110 + '/n')
})