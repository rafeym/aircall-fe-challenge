import { Route, Switch } from 'react-router-dom'

import Activity from './Activity'
import ActivityDetail from './ActivityDetail'
import Archive from './Archive'
import NotFound from './NotFound'

export default function index() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Activity} />
        <Route exact path='/archive' component={Archive} />
        <Route exact path='/call-detail/:id' component={ActivityDetail} />
        <Route render={NotFound} />
      </Switch>
    </>
  )
}
