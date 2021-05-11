import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SignupPage from './containers/SignupPage';
import ForgetPassword from './containers/ForgetPassword';
import Main from './containers/Main';
import Posts from './components/Table.jsx';
import { Pagination } from './components/Pagination';
import { useEffect, useState } from 'react';
import Api from './api/Api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CalendarComponent, Inject } from '@syncfusion/ej2-react-calendars';
import { Agenda, Day, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
import LoginPage from './containers/LoginPage'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const getList = async () => {
      setLoading(true);

      const res = await Api.get("/employees");
      setPosts(res.data.data);

      setLoading(false);
    };
    getList();
  }, []);

  // Get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>

      <Link to="/"></Link>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/schedule">
          <div className="col-md-6 offset-md-3 mt-5">
            <ScheduleComponent cssClass='schedule-cell-dimension'>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
          </div>
        </Route>
        <Route path="/calendar">
          <div className="col-md-4 offset-md-5 mt-5">
            <CalendarComponent />
          </div>
        </Route>
        <Route path="/table">
          <Posts posts={currentPosts} loading={loading} />
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
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