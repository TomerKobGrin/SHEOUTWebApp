import { createStore, applyMiddleware, compose } from 'redux'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []



  /* ------------- Epic Middlewares ------------- */

  //const sagaMiddleware = createSagaMiddleware({})
  //middleware.push(sagaMiddleware)

  const enhancers = []
  enhancers.push(applyMiddleware(...middleware))


  const store = createStore(rootReducer, compose(...enhancers))


  // kick off root saga
  // sagaMiddleware.run(rootSaga)

  return {store}
}
