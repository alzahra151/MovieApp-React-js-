// import logo from './logo.svg';
import './App.css';
import Header from './componants/Header'
import AboutMe from './componants/AboutMe';
import Skills from './componants/Skills';
import Portfolio from './componants/Portfolio';
import Footer from './componants/Footer';
 import Portcard from './componants/Portcard';
import Register from './ToDo&Regester/Register';
import Movie from './apicomponant/Movie';
import Todo from './todoApp/Todo';
import NavBar  from './apicomponant/NavBar';
import {LanguagProvider} from './context/context'
import {
  BrowserRouter as Router,
  Switch ,
  Route
}
from 'react-router-dom'
import MovieDetails from './apicomponant/MovieDetails';
import Favourite from './apicomponant/Favourite';
import { useState } from 'react';


function App() {
  const [languag ,setLanguag]=useState("en")
  return (
    <div className="App">
   
    {/* <Header></Header>
    <AboutMe/>
    <Skills/>
    <Portfolio />
    <Footer/> */}
{/* /////////////// */}
{/* 
<Register/> */}
{/* <Todo/> */}
<Router>
<LanguagProvider value={{languag ,setLanguag}}>
<NavBar/>
{/* <Movie/> */}
  <Switch>
  <Route exact path='/' component={Movie}/>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/movies' component={Movie}/>
    <Route exact path='/favourite' component={Favourite}/>
    <Route exact path='/details/:id' component={MovieDetails}/>
  </Switch>
  </LanguagProvider>
</Router>
    </div>

  );
}

export default App;
