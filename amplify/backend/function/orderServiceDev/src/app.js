/* Amplify Params - DO NOT EDIT
  API_SHEOUTDEV_GRAPHQLAPIENDPOINTOUTPUT
  API_SHEOUTDEV_GRAPHQLAPIIDOUTPUT
  AUTH_SHEOUT8C751B02_USERPOOLID
  ENV
  FUNCTION_ORDERSERVICEDEV_NAME
  REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
  API_SHEOUTDEV_GRAPHQLAPIENDPOINTOUTPUT
  API_SHEOUTDEV_GRAPHQLAPIIDOUTPUT
  AUTH_SHEOUT8C751B02_USERPOOLID
  ENV
  REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
  AUTH_SHEOUT8C751B02_USERPOOLID
  ENV
  REGION
Amplify Params - DO NOT EDIT *//*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var AWS = require("aws-sdk")
const axios = require("axios")
const urlParse = require("url").URL
const https = require('https')
const { createOrder, createOrderItem, updateOrder } = require('./graphqlApi')
const GRAPHQL_OPERATIONS = require('./graphqlApiHandler')
const graphqlUrl = process.env.API_SHEOUTDEV_GRAPHQLAPIENDPOINTOUTPUT
const graphqlHost = new urlParse(graphqlUrl).hostname.toString()
const region = process.env.REGION
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' })
// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})


/**********************
 * Example get method *
 **********************/

app.post('/order', async function (req, res) {
  try {
    const { sub } = req.headers
    const orderItems = (req.body && req.body.orderItems && req.body.orderItems.length > 0) ? req.body.orderItems : undefined
    if (!orderItems) {
      res.status(400).send('no items in order')
    }
    
    const adminGetUserRequest = cognitoidentityserviceprovider.listUsers({
      UserPoolId: 'us-east-2_428mDcETm',
      "Filter": `sub = \"${sub}\"`,
      "Limit": 1
    }).promise()
    const response = await adminGetUserRequest.then(data => ({ user: data.Users[0] }),
      err => ({
        err
      }))
    if (response.err) {
      res.status(500).send('internal error')
    }
    const user = response.user
    const userName = user.Username
    const userEmail = user.Attributes.filter(att => att.Name == "email")[0].Value
    const createOrderResponse = await GRAPHQL_OPERATIONS.CREATE_ORDER(userName, userEmail)
    console.log(`response ${JSON.stringify(createOrderResponse)}`)
    const orderId = createOrderResponse.data.createOrder.id
    await Promise.all(orderItems.map(item => GRAPHQL_OPERATIONS.CREATE_ORDER_ITEM(
      orderId, item.id, userName, item.title, item.price, item.count, item.image
    )))
    
    res.status(200).send('order has been placed')
  } catch (e) {
    console.log(e)
    res.status(500).send('internal error')
  }


})


app.listen(3000, function () {
  console.log("App started")
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
