import React, { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = props => {
  const [active, setActive] = useState(useLocation().pathname)
  return (
    <nav className="nav">
      <Link
        className={`nav__link nav__link-search ${
          active == '/' ? 'active' : ''
        }`}
        to="/"
        onClick={() => setActive('/')}
      >
        Search
      </Link>
      <Link
        className={`nav__link + ${active == '/create' ? ' active' : ''}`}
        to="/create"
        onClick={() => setActive('/create')}
      >
        Create Product
      </Link>
    </nav>
  )
}
