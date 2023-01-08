import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddFavourite } from './../store/Action'
import { languagContext } from '../context/context'
import { Navbar } from './Navbar.css'
export default function NavBar() {

  let FavCounter = useSelector((state) => state.counter)
  const { languag, setLanguag } = useContext(languagContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-1">
            <li className="nav-item m-3">
              <Link className='list' to="/movies">Movies</Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/favourite">faviorite</Link>

            </li>
            <li className="nav-item m-3 text-light"><i class="bi bi-heart-fill text-danger"></i>{FavCounter}</li>
          </ul>
          <button className='btn btn-primary border-0 lang' onClick={() => { setLanguag((languag == "en") ? "Ar" : "en") }}>
            language
          </button>
          <form className="d-flex">


            <ul className='navbar-nav me-auto mb-2 mb-lg-0 p-1'>
              <li className="nav-item m-3 text-light">{languag}</li>
              <li className="nav-item  p-3">
                <Link to="/register">Register</Link>
              </li>


            </ul>
          </form>
        </div>
      </div>
    </nav>
  )
}
