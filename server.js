const express = require('express')
const app = express()
const { ROLE, users } = require('./loginData')
const { authUser, authRole } = require('./utils/Auth');
const projectRouter = require('./routes/projects')

app.use(express.json())
app.use(setUser)
app.use('/projects', projectRouter)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page')
})

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page')
})

function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

app.listen(3000)

// Plan B

// const http = require('http');
// const fs = require('fs')

// function readHtml(request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.readFile('./index.html', null, function (error, data) {
//         if (error) {
//             response.writeHead(404);
//             response.write('File not found')
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// }
// http.createServer(readHtml).listen(8000);
// console.log('Now listening @ http://localhost:8000/')




