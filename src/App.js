import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeScreen from './Containers/HomeScreen'
const App = () => {
  return (
    <AmplifyAuthenticator>
      <Router>
        <Switch>
          <Route path="/">
            <HomeScreen/>
          </Route>
        </Switch>
      </Router>
    </AmplifyAuthenticator> 
  )
}

export default App;
