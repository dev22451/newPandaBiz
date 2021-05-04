import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SignupPage from './containers/SignupPage';
import LoginPage from './containers/LoginPage';
import ForgetPassword from './containers/ForgetPassword';
import Main from './containers/Main';
import { CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>

      <Link to="/"></Link>

      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/forget">
          <ForgetPassword />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;