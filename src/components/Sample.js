import React from 'react';
import First from './First';
import Second from './Second';
import Route from './Rroute'
import Header from './Header'

export default () => {
  return(
    <div>
      <Header/>
      <Route path="/">
        <First/>
      </Route>
      <Route path="/second">
        <Second/>
      </Route>
    </div>
  )
}