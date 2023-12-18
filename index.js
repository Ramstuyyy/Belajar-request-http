const http = require('http')
const rupiah = require('rupiah-format')
const os = require('os')
const port = 3002
const host = "localhost"
const server = http.createServer(function (request, response) {
    const nama = "Ramstuy"
    let uang = 500000
    let jajan = 200000
    let sisa = uang - jajan
    let sisaRam = os.freemem


    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)
    const tersisa = `
<head>
    <title>${nama}</title>
</head>
<body>
<h2 style="background: black; color:white; text-align:center; padding 20px;">Node Js hitung sisa uang jajan</h2>
<p></p>halo nama saya ${nama}, saya punya uang ${uang}, tadi saya jajan sebesar ${jajan}, sekarang uang saya sisa ${sisa} </p>
<h1>sisa ram pc gweh adalah  ${sisaRam}</h1>
</body>
`

    response.statusCode = "200"
    response.end(tersisa)
})
server.listen(port, host, function () {
    console.log(`Server menyala di ${host} dan di port ${port}`)
})