import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import './Styles/LoginScreenStyle.css';
function LoginScreen() {
  return (
    <div className={"Login-container"}>
        <AmplifyAuthenticator/>
    </div>
  )
}

export default LoginScreen;
