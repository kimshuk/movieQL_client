import gql from "graphql-tag";

const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 8) {
      id
      title
      rating
    }
  }
`;

export default HOME_PAGE;
