// import logo from './logo.svg';
import { Switch } from 'react-router';
import './App.css';
import Booking from './components/Booking';
import HeaderComponent from './components/HeaderComponent';
import Searching from './components/Searching';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import AddFlight from './components/AddFlight';
import ListofFlights from './components/ListofFlights';
import AddFlight from './components/AddFlight';
import Register from './components/Register';
import Login from './components/Login';
import BookList from './components/BookList';
import DetailPage from './components/DetailsPage';


function App() {
  return (
    <Router>
      <HeaderComponent/>
      <div className="container">
        <Switch>
          <Route path="/addflight" exact component = {AddFlight}> </Route>
          <Route path="/list" exact component = {ListofFlights}> </Route>
          <Route path="/book" exact component = {BookList}></Route>
          <Route path="/details" exact component = {DetailPage}></Route>
          <Route path="/searchFlights" exact component = {Searching}></Route>
          <Route path="/register" exact component = {Register}> </Route>
          <Route path="/login" exact component = {Login}> </Route>

        </Switch>
      </div>
      </Router>
  );
}

export default App;
