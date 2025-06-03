1111111
index: 

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;






movie.js:

const express = require('express');
const router = express.Router();
const dbo = require('../db/conn');
const ObjectId = require('mongodb').ObjectId;
const MAX_RESULTS = parseInt(process.env.MAX_RESULTS);
const COLLECTION = 'movies';

//getMovies
router.get('/', async (req, res) => {
  let limit = MAX_RESULTS;
  if (req.query.limit){
    limit = Math.min(parseInt(req.query.limit), MAX_RESULTS);
  }
  let next = req.query.next;
  let query = {}
  if (next){
    query = {_id: {$lt: new ObjectId(next)}}
  }
  const dbConnect = dbo.getDb();
  let results = await dbConnect
    .collection(COLLECTION)
    .find(query)
    .sort({_id: -1})
    .project({title:1,plot:1})
    .limit(limit)
    .toArray()
    .catch(err => res.status(400).send('Error searching for movies'));
  next = results.length == limit ? results[results.length - 1]._id : null;
  res.json({results, next}).status(200);
});

//getMovieById
router.get('/:id', async (req, res) => {
  const dbConnect = dbo.getDb();
  let query = {_id: new ObjectId(req.params.id)};
  let result = await dbConnect
    .collection(COLLECTION)
    .findOne(query);
  if (!result){
    res.send("Not found").status(404);
  } else {
    res.status(200).send(result);
  }
});

//addMovie
router.post('/', async (req, res) => {
  const dbConnect = dbo.getDb();
  console.log(req.body);
  res.send({});
});

//deleteMovieById
router.delete('/:id', async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const dbConnect = dbo.getDb();
  let result = await dbConnect
    .collection(COLLECTION)
    .deleteOne(query);
  res.status(200).send(result);
});

module.exports = router;









appendFile.test.js:

const jestOpenAPI = require('jest-openapi').default;
const axios = require('axios').default;
const BASE_URL = "http://localhost:3000/api/v1";
const SCHEMA = "../schema/cine.schema.yaml";
const path = require('path');
const PELICULA = {
  "titulo" : "Italian Spiderman",
  "directores" : [{"nombre":"Dario", "apellidos": "Russo"}],
  "actores" : [ {
    "nombre" : "David",
    "apellidos" : "Ashby"
  }, {
    "nombre" : "Chris",
    "apellidos" : "Asimos"
  } ],
  "resumen" : "When an otherworldly substance with amazing cloning properties falls into the hands of the evil criminal mastermind, Captain Maximum, only the extreme powers of the Italian Spiderman can save the world.",
  "duracion" : 40,
  "rating": 7.9,
  "genero": ["comedia"]
};

// Load an OpenAPI file (YAML or JSON) into this plugin
jestOpenAPI(path.join(__dirname, SCHEMA));

describe('POST /peliculas', () => {
    it('should satisfy OpenAPI spec', async () => {
      const res = await axios.post(BASE_URL + '/peliculas', PELICULA);
      expect(res.status).toEqual(201);
      expect(res).toSatisfyApiSpec();
    });
});

// Write your test
describe('GET /peliculas', () => {
  it('should satisfy OpenAPI spec', async () => {
    const res = await axios.get(BASE_URL + '/peliculas');
    expect(res.status).toEqual(200);
    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec();
  });
});





yamal:

openapi: 3.0.3
info:
  description: |-
    My Movies documentation
  version: 1.0.0
  title: Movies
tags:
  - name: movie
    description: Everything about your Movies
paths:
  /movie:
    get:
      tags:
        - movie
      summary: GET all movies
      description: GET all movies
      responses:
        "200":
          description: "OK"
          content:
             application/json:
              schema: 
                $ref: '#/components/schemas/Movies'
    post:
      tags:
        - movie
      summary: Add a new movie
      description: Add a new movie
      operationId: addMovie
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Movie'
        '405':
          description: Invalid input
      requestBody:
        description: Add a new movie
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Movie'
  /movie/{movieId}:
    parameters:
      - $ref: '#/components/parameters/ID'
    get:
      tags:
        - movie
      summary: Find movie by ID
      description: Returns a single movie
      operationId: getMovieById
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Movie'
        '400':
          description: Invalid ID supplied
        '404':
          description: Movie not found
    delete:
      tags:
        - movie
      summary: Deletes a movie
      description: Deletes a movie
      operationId: deleteMovie
      responses:
        '200':
          description: Successful operation
        '400':
          description: Invalid movie ID
    #TODO /movie/find
components:
  parameters:
    ID:
      description: Movie ID
      name: movieId
      in: path
      required: true
      schema:
        $ref: "#/components/schemas/ID"
  schemas:
    Movies:
      type: object
      properties:
        results:
          $ref: "#/components/schemas/MoviesArray"
        next:
          type: string
          description: Movie next ID for pagination search
      required:
        - results
        - next
    MoviesArray:
      type: array
      items:
        $ref: "#/components/schemas/MovieMin"
    MovieMin:
      type: object
      properties:
        _id:
          $ref: "#/components/schemas/ID"
        title:
          type: string
          description: Movie title
        year:
          type: integer
          description: Movie year
      required:
        - _id
        - title
        - year
    Movie:
      # TODO
    ID:
      type: string
      description: Movie Object ID obtained from the database
      example: 6463448ae7684d03f44af30f
servers:
  - url: localhost:3000/api
