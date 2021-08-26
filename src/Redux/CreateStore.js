import { createStore, applyMiddleware, compose } from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import rootEpic from '../Epics'
// creates the store
export default (rootReducer, rootEpic) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []



  /* ------------- Epic Middlewares ------------- */

  const epicMiddleware = createEpicMiddleware({
    // dependencies: {
    //   //history
    // }
  })

  middleware.push(epicMiddleware)

  const enhancers = []
  enhancers.push(applyMiddleware(...middleware))


  const store = createStore(rootReducer, compose(...enhancers))


  // kick off root rootEpic
  epicMiddleware.run(rootEpic)

  return {store}
}
