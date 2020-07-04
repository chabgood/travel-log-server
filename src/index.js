const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')
const cors = require('cors')
const middleware = require('./middlewares')
const logs = require('./api/logs')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 1337
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(morgan('common'))
app.use(helmet())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
)
app.use(express.json())
app.get('/', (req, res) => {
  res.json({
    message: 'moo'
  })
})

app.use('/api/logs', logs)

app.use(middleware.notFound)
app.use(middleware.errorHandler)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${port}`)
})
