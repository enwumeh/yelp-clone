import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestaurantContextProvider } from "./context/RestaurantContext";
import Home from "./routes/Home";
import RestaurantdeetsPage from "./routes/RestaurantdeetsPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <RestaurantContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdatePage}
            />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantdeetsPage}
            />
          </Switch>
        </Router>
      </div>
    </RestaurantContextProvider>
  );
};

export default App;
