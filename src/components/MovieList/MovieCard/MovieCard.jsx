/* eslint-disable react/prop-types */
import React from "react";
import "./MovieCard.css";

export class MovieCard extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log(location.state);
    if (location.state) {
      return (
        <div className="movieCard__container">
          <div className="movieCard__description">
            <img className="movieCard__poster" src={location.state.poster} />
            <div className="movieCard__column">
              <h3 className="movieCard__title">{location.state.title}</h3>
              <h5 className="movieCard__year">{location.state.year}</h5>
              <ul className="movieCard__genres">
                <li className="genres__genre">{location.state.genres}</li>
              </ul>
              <p className="movieCard__summary">{location.state.summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
