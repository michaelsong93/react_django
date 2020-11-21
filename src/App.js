import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import articles from "./containers/articlesList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = "/main" exact component={Main} />
          <Route path = "/article" exact component={articles} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
