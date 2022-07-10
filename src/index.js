import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Link all stylesheets here
import './styles/body.css'
import './styles/app.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/activityfeed.css'
import './styles/activitydetail.css'
import './styles/spinner.css'
import './styles/info.css'
import './styles/button.css'

import { BrowserRouter as Router } from 'react-router-dom'

import store from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
