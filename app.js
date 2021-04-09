const express = require('express')
const app = express()

// 修改模板文件默认路径
// app.set('views', './public')
app.engine('html', require('express-art-template'));

app.use('/public/',express.static('./public'))
app.use('/node_modules/', express.static('./node_modules'))
const comments = []
app.get('/', (resquest, response) => {
    response.render('index.html', {
        comments
    })
})
app.get('/comment', (resquest, response) => {
    response.render('comment.html')
})
app.get('/api/pinglun', (resquest, response) => {
    let commen = resquest.query
    commen.dateTime = new Date().toLocaleString()
    // response.send(resquest.query)
    comments.unshift(commen)
    response.redirect('/')
})


app.listen(4396, () => {
    console.log('express server run...')
})