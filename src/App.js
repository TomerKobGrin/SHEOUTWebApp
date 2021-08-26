import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './Containers/HomeScreen'
import { Fragment, useEffect } from 'react'
import CustomAppBar from './Components/CustomAppBar'
import { useDispatch, useSelector } from 'react-redux'
import { ProductActions, ProductSelectors } from './Redux/ProductRedux'
const App = () => {
  const dispatch = useDispatch()
  const items = useSelector(ProductSelectors.getItems)
  useEffect(() => {
    debugger
    if (!items) {
      dispatch(ProductActions.fetchProducts())
    }
  }, [])
  
  debugger
  return (
    <Fragment>
      <CustomAppBar />
      <AmplifyAuthenticator>
        <Router>
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      </AmplifyAuthenticator>
    </Fragment>
  )
}

export default App
