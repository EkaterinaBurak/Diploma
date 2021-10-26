import React from "react";
import PropTypes from "prop-types";
// import styles from "./Movie.module.css";

export function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie__description">
      <img className="movie__poster" src={poster} alt={title} title={title} />
      <div className="movie__column">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="movie__genres-genre">
                {" "}
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movie__summary">{summary.slice(0, 120)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
