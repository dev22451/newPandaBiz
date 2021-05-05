import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SignupPage from './containers/SignupPage';
import ForgetPassword from './containers/ForgetPassword';
import Main from './containers/Main';
import DataTable from './components/Table.jsx';
import { useEffect, useState } from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Api from './api/Api';


function App() {
  const [list, setList] = useState({});

  useEffect(() => {
    setTimeout(async () => {
      let result = await Api.get("/employees");
      setList(result.data);
    }, 1000);
  }, []);


  return (
    <Router>

      <Link to="/"></Link>
      <Switch>
        <Route exact path="/">
          <DataTable list={list} />
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