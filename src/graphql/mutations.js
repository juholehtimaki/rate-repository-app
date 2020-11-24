import { gql } from "apollo-boost";

export const AUTHORIZE_USER = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview(
    $owner: String!
    $name: String!
    $rating: Int!
    $review: String
  ) {
    createReview(
      review: {
        repositoryName: $name
        ownerName: $owner
        rating: $rating
        text: $review
      }
    ) {
      repositoryId
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      username
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;
