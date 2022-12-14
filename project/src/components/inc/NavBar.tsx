import React from 'react'
import { NavLink } from 'react-router-dom'
import { Bilgiler } from '../../models/IUser'

function NavBar( item: { data: Bilgiler } ) {

  const userLogout = () => {
    sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    // Redirect
    window.location.href = '/'
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        <NavLink className="navbar-brand" to='/dashboard'>App Title</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to='/dashboard' className="nav-link" aria-current="page">Dashboard</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to='/orders'>Orders</NavLink>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a onClick={userLogout} className="dropdown-item" role='button'>Logout</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled">{ item.data.userName + ' ' + item.data.userSurname } - (0)</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  )
}

export default NavBar