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
import {
  Agenda, Day, Month, ScheduleComponent, ViewDirective, DragAndDrop,
  Resize, ViewsDirective, Week,
  WorkWeek, Year,
  eventRendered
} from '@syncfusion/ej2-react-schedule';
import LoginPage from './containers/LoginPage';
import { Internationalization } from '@syncfusion/ej2-base';
import { green } from '@material-ui/core/colors';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const data = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 13, 10, 0),
    EndTime: new Date(2018, 1, 13, 12, 30),
    IsAllDay: false,
    Status: 'Completed',
    Priority: 'High',
    Location: 'Delhi',
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;UNTIL=20180220T043000Z;'
  }, {
    Id: 2,
    Subject: 'Paris',
    StartTime: new Date(2018, 1, 11, 10, 0),
    EndTime: new Date(2018, 1, 11, 12, 30),
    IsAllDay: false,
    Location: 'Mumbai',
  }, {
    Id: 3,
    Subject: 'Teaching',
    StartTime: new Date(2018, 1, 14, 8, 0),
    EndTime: new Date(2018, 1, 14, 12, 30),
    IsAllDay: false,
    Location: 'Noida',
  }]


  useEffect(() => {
    const getList = async () => {
      setLoading(true);

      const res = await Api.get("/employees");
      setPosts(res.data.data);

      setLoading(false);
    };
    getList();
  }, []);

  const instance = new Internationalization();
  const getTimeString = (value) => {
    return instance.formatDate(value, { skeleton: 'hm' });
  }

  const onEventRendered = (scheduleObj) => {
    console.log(scheduleObj.element);
  }


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
          <div className="row">
            <div className="col-md-8 offset-md-2 mt-5">
              <ScheduleComponent height='550px' currentView="Month" ref={schedule => ScheduleComponent.scheduleObj = schedule} eventRendered={onEventRendered} selectedDate={new Date(2018, 1, 15)} eventSettings={{
                enableTooltip: true,
                dataSource: data,
                template: function eventTemplate(data) {
                  return (<div className="template-wrap" style={{ background: data.SecondaryColor }}>
                    <div className="subject" style={{ background: data.PrimaryColor }}>{data.Subject}</div>
                    <div className="time" style={{ background: data.PrimaryColor }}>
                      <span className="timedesc" style={{ marginBottom: '15px' }}>  Start:</span> <br /> {getTimeString(data.StartTime)}
                      <br />
                      <span className="timedesc">  End:</span> <br /> {getTimeString(data.EndTime)}
                    </div>

                    <div className="location">
                      <i className="fa fa-map-marker"></i>
                      {data.Location}
                    </div>
                  </div>);
                }
              }}>
                <ViewsDirective>
                  <ViewDirective option='WorkWeek' startHour='10:00' endHour='18:00' />
                  <ViewDirective option='Week' startHour='07:00' endHour='15:00' />
                  <ViewDirective option='Month' showWeekend={true} />
                  <ViewDirective option='Year' />
                </ViewsDirective>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, Year]} />
              </ScheduleComponent>
            </div>
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

    </Router >
  );
}

export default App;