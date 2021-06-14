import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import FavoriteDigimons from './FavoriteDigimons.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/favorite'>
              <FavoriteDigimons />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
export default App;