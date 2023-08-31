import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Book {
        _id: ID!
        title: String!
        author: String!
        publishedDate: [Date]!
    }

    type Student {
        _id: ID!
        fullName: String!
        role: String!
        photo: String!
        password: String!
        issuedBooks: [Book]
    }

    type BookInventory {

    }

    type Date {

    }
`