import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store.js'
import Home from './containers/Home.js'


render(<Provider store={store}><BrowserRouter>
	<HashRouter>
	<Switch>
            <Route exact path="/" component={Home} />
   </Switch></HashRouter></BrowserRouter></Provider>, document.getElementById('app'));