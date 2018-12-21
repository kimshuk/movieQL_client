import React from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieId }}>
    {({ loading, data, error }) => {
      if (loading) return "loading";
      if (error) console.log(error);
      return (
        <>
          {data.movie.title}
          {data.movie.medium_cover_image}
          {data.movie.rating}
          {data.movie.description_intro}
        </>
      );
    }}
  </Query>
);

export default withRouter(Detail);
