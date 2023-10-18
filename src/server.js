const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('Hello world!')
})


const PORT = 3000

app.listen(PORT, () => console.log(`Listening on port ${PORT}.\nAccess: http://localhost:${PORT}`))