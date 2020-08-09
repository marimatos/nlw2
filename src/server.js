const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages")

//configurar nunjucks
nunjucks.configure('src/views', {
	express: server,
	noCache: true
})


//receber os dados do req.body
server.use(express.urlencoded({ extended:true }))

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static('public'))


//rotas
server.get('/', pageLanding)
server.get('/study', pageStudy)
server.get('/give-classes', pageGiveClasses)
server.post('/save-class', saveClasses)

server.listen(5000, function(){
	console.log("server is running") 
})