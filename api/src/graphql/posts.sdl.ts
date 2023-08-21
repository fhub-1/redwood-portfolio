export const schema = gql`
  type Post {
    id: Int!
    image: String!
    title: String!
    body: String!
    createdAt: DateTime!
    authorLogo: String!
    authorName: String!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    image: String!
    title: String!
    body: String!
    authorLogo: String!
    authorName: String!
  }

  input UpdatePostInput {
    image: String
    title: String
    body: String
    authorLogo: String
    authorName: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
