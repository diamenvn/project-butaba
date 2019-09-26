import React, {
  Component
} from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";

import Dashboard from '../layout/dashboard'
import Master from '../layout/dashboard'
import List from '../layout/order/list'
class Routing extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/order" component={List} />
      </Router>
    );
  }
}

export default Routing;
