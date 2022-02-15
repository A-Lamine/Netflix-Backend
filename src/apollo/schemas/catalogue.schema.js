const { gql } = require('apollo-server-express');

module.exports = gql`
    type Catalogue{
        id: ID
        name: String
    }
    extend type Query {
        getCatalogues:[Catalogue]
        getCatalogue(id: ID): Catalogue!
    }
    extend type Mutation {
        createCatalogue(name: String!): Catalogue
        updateCatalogue(id:ID, name: String): Catalogue
    }
`