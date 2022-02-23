import './App.css';
import Header from './components/Header';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import New from './components/New';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Trending from './components/Trending';
import Home from './components/Home';
import MyPosts from './components/MyPosts';
import AddPost from './components/AddPost';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navVisibile : true
    };
  }

  hideNav = () => {
    this.setState({
      navVisibile : false
    })
  }

  showNav = () => {
    this.setState({
      navVisibile : true
    })
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          {this.state.navVisibile && (<Header  hide={this.hideNav.bind(this)}/>)}
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/about" component = {About}/>
          <Route path="/booking" component = {Booking}/>
          <Route path="/contact" component = {Contact}/>
          <Route path="/new" component = {New}/>
          <Route path="/trending" component = {Trending}/>
          <Route path="/my-posts" component = {MyPosts}/>
          <Route path="/add-post" component = {AddPost}/>
          <Route path="/register" component = {Register}/>
          <Route path="/sign-in" render={() => <SignIn show={this.showNav.bind(this)}/>}/>
        </Switch>
        </div>
      </Router>
    );
  }
 
}

export default App;
