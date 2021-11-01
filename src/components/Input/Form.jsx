import React from "react";
import { useState } from "react";
import { Movie } from "../MovieList/Movie/Movie";
import { MovieList } from "../MovieList";

export function Form({ onClick }) {
  const [movie, setMovie] = useState(movieList);
  const searchMovie = (inputValue) => {
    if (inputValue) {
      setMovie([...movieList.filter((movie) => movie.title === inputValue)]);
    } else {
      setMovie(movieList);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Input
        value={text}
        onChange={onChangeInput}
        placeholder="Сделай же что-нибудь!"
      />
      <Button text="Add" onClick={onClickAdd} />
    </div>
  );
}
