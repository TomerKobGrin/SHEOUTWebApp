const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')

const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)
  const sub = extractUserSub(event)
  if (!!sub) {
    event.headers.sub = sub
  }
  console.log(`EVENT: ${JSON.stringify(event)}`)
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise
}

const extractUserSub = event => {
  const identity = event.requestContext && event.requestContext.identity
  if (!identity) {
    return null
  }
  const cognitoString = identity.cognitoAuthenticationProvider
  return cognitoString && cognitoString.split('CognitoSignIn:')[1]
}