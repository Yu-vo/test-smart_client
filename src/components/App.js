import React from 'react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { Routes } from '../routes'
import { Navbar } from './Navbar'

const history = createBrowserHistory()
export const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Routes />
    </Router>
  )
}
