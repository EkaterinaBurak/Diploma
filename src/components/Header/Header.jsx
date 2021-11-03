import React, { useState } from "react";
import { Form } from "./Form";
import { Movie } from "../MovieList/Movie/Movie";
import "./Header.css";

export function Header() {
  const [movies, setMovies] = useState(movieItem);
  const searchMovie = (inputValue) => {
    if (inputValue) {
      setMovies([...movieItem.filter((movie) => movie.title === inputValue)]);
    } else {
      setMovies(movieItem);
    }
  };
  return (
    <div className="header__body">
      <Form searchMovie={searchMovie} />
      <ul>
        {movies.map((index, movie) => {
          return <Movie key={index} title={movie.title} />;
        })}
      </ul>
    </div>
  );
}
