const { gql } = require('apollo-server-express');

module.exports = gql`
    type Movie {
        id: ID
        title: String
        background: String
        img: String
        description:String
        video: String
        classification:[Catalogue]
    }
    type Query {
        getMovies:[Movie]
        getMovie(id: ID): Movie!
    }
    type Mutation {
        createMovie(title: String!,background: String, img: String, description:String, video: String, classification:[ID]): Movie
        updateMovie(id:ID, title:String, background: String, img: String, description:String, video: String, classification:[ID]): Movie
    }
`

