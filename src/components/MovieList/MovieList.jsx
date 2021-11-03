import React from "react";
import { Movie } from "./Movie/Movie";
import "./MovieList.css";

export class MovieList extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: { movies },
    } = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    ).then((response) => response.json());
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    const { searchText } = this.props;
    const filteredMovies = movies?.filter((movie) =>
      movie.title?.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <div className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movie">
            {filteredMovies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
