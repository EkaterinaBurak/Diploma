import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieList } from "../components/MovieList";
import { NavBar } from "../components/NavBar";
import { MovieCard } from "../components/MovieList/MovieCard";
import { About } from "../components/MovieList/About";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function RootRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/" exact={true} component={MovieList} />
          <Route path="/about" component={About} />
          <Route path="/movie/:id" component={MovieCard} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
