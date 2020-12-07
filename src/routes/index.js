import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import CharacterList from "../pages/characterList";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/poke" component={CharacterList} />
      <Route exact path="/rickandmorty" component={CharacterList} />
    </Switch>
  );
};

export default Routes;
