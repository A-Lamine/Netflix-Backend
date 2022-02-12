const { gql } = require('apollo-server-express');

module.exports = gql`
    type Movie {
        id: ID
        title: String
        img: String
        catalogueId: ID!
        
    }
    type Query {
        getMovies:[Movie]
        getMovie(id: ID): Movie!
    }
    type Mutation {
        createMovie(title: String!, img: String): Movie
        updateMovie(id:ID, title:String, img: String): Movie
    }
`

module.export = gql`
    type Catalogue{
        id: id
        name: String
        movies: [Movie]
    }
    type Query {
        getCatalogues:[Catalogue]
        getCatalogue(id: ID): Catalogue!
    }
    type Mutation {
        createCatalogue(name: String!): Catalogue
        updateCatalogue(id:ID, name: String): Catalogue
    }
`

