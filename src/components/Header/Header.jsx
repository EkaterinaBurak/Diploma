import React, { useState } from "react";
import { Form } from "./Form";

export function Header() {
  //   const [movies, setMovies] = useState(movieList);
  //   const searchMovie = (inputValue) => {
  //     if (inputValue) {
  //       setMovies([...movieList.filter((movie) => movie.title === inputValue)]);
  //     } else {
  //       setMovies(movieList);
  //     }
  //   };
  return (
    <div>
      <Form />
      {/* <ul>
        {movies.map((id, item) => {
          return <Movie key={id} title={item.title} />;
        })}
      </ul> */}
    </div>
  );
}
