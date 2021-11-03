import { useState } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieList } from "../components/MovieList";
import { NavBar } from "../components/NavBar";
import { MovieCard } from "../components/MovieList/MovieCard";
import { About } from "../components/MovieList/About";
import { Footer } from "../components/Footer";
import { Form } from "../components/Header/Form";

export function RootRouter() {
  const [searchText, setSearchText] = useState("");

  return (
    <BrowserRouter>
      <div>
        <Form onClick={(text: string) => setSearchText(text)} />
        <NavBar />
        <Switch>
          <Route path="/" exact={true} component={MovieList}>
            <MovieList searchText={searchText} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/movie/:id" component={MovieCard} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
