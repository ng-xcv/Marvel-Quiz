import '../../App.css';
import Header from '../Header'
import Footer from '../Footer'
import Landing from '../Landing'
import Welcome from '../Welcome'
import Login from '../Login'
import ErrorPage from '../ErrorPage'
import Signup from '../Signup';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/welcome' component={Welcome} />
          <Route component={ErrorPage} />
        </Switch>



        <Footer />
    </Router>
  );
}

export default App;
