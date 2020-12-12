import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { CreateProduct } from '@components/create'
import { Search } from '@components/search'

export const Routes = () => (
  <Switch>
    <Route path="/" component={Search} exact />
    <Route path="/create" component={CreateProduct} exact />
    <Route component={NotFoundPage} />
  </Switch>
)
const NotFoundPage = () => <div>Not found page</div>
