require('dotenv').config()
const {
  allDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc
} = require('../lib/dal-helper')
const { getTours } = require('../dal')
const express = require('express')
const app = express()
const slugify = require('slugify')
const HTTPError = require('node-http-error')
const bodyParser = require('body-parser')

module.exports = app => {
  app.get('/tours', (req, res, next) => {
    getTours({
      include_docs: true
      // startkey: 'history_',
      // endkey: 'history_\ufff0'
    }).then(tours => res.send(tours))
    // allDocs(req.bo).then(tours => res.send(tours))
    // .catch(err = > next(new HTTPError())))
  })
  app.get('/tours/:id', (req, res) => {
    getDoc(req.params.id).then(doc => res.send(doc))
  })
  app.post('/tours/', (req, res) => {
    req.body._id = `${slugify(req.body.tourName, {
      lower: true
    })}`
    addDoc(req.body).then(doc => res.send(doc))
  })
  app.put('/tours/:id', (req, res) => {
    return updateDoc(req.body).then(doc => res.send(doc))
  })
  app.delete('/tours/:id', (req, res) => {
    deleteDoc(req.params.id).then(doc => res.send(doc))
  })
  app.get('/interests', (req, res) => {
    getTours({ include_docs: true }).then(tours => res.send(tours))
  })
  app.get('/recommendations', (req, res) => {
    getTours({ include_docs: true }).then(tours => res.send(tours))
  })
  app.get('/recommendations/:id', (req, res) => {
    getDoc(req.params.id).then(doc => res.send(doc))
  })
}
