require('dotenv').config()
const express = require('express')
const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const tourRoute = require('./routes/tours')

app.use(bodyParser.json())
app.use(cors({ credentials: true }))

// app.use(
//   jwt({
//     secret: jwks.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: 'https://jschutzman.auth0.com/.well-known/jwks.json'
//     }),
//     audience: 'https://chs.tour.planner',
//     issuer: 'https://jschutzman.auth0.com/',
//     algorithms: ['RS256']
//   })
// )

// app.use(cors({ credentials: true }))

app.get('/', (req, res) => {
  res.status(200).send('Welcome to book charleston tours')
})

tourRoute(app)

app.listen(PORT, () => console.log('API UP on', PORT))
