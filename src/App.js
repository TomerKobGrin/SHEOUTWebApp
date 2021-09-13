import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './Containers/HomeScreen'
import React, { Fragment, useEffect, useState } from 'react'
import CustomAppBar from './Components/CustomAppBar'
import { useDispatch, useSelector } from 'react-redux'
import { ProductActions, ProductSelectors } from './Redux/ProductRedux'
import ShoppingCartScreen from './Containers/ShoppingCartScreen'
import OrdersScreen from './Containers/OrdersScreen'
import PubSubHelper from './Services/pubSubHelper'
import { OrdersActions } from './Redux/OrdersRedux'
import ConfirmationPopup from './Components/ConfirmationPopup'

const App = () => {
  const dispatch = useDispatch()
  const items = useSelector(ProductSelectors.getItems)
  const isUploadingOrder = useSelector(ProductSelectors.getIsUploadingOrder)
  const [confirmationNumber, updateConfirmationNumber] = useState(null)
  useEffect(() => {
    if (!items) {
      dispatch(ProductActions.fetchProducts())
    }
    if (isUploadingOrder) {
      dispatch(ProductActions.resetBag())
    }
  }, [])

  return (
    <Fragment>
      <Router>
        <CustomAppBar />
        <AmplifyAuthenticator handleAuthStateChange={(state, data) => {
          if (state === "signedin") {
            const { email, sub } = data.attributes
            PubSubHelper.subscribe(sub, email, (data) => {
              updateConfirmationNumber(data)
              dispatch(OrdersActions.fetchOrders())
            })
          }
        }}>
          {<ConfirmationPopup open={!!confirmationNumber} title={confirmationNumber} onClose={() => updateConfirmationNumber(null)} />}
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/cart" component={ShoppingCartScreen} />
            <Route exact path="/orders" component={OrdersScreen} />
          </Switch>
        </AmplifyAuthenticator>
      </Router>
    </Fragment>
  )
}

export default App


