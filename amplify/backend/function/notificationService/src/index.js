/* Amplify Params - DO NOT EDIT
	ANALYTICS_SHEOUTDEV_ID
	ANALYTICS_SHEOUTDEV_REGION
	API_SHEOUTDEV_GRAPHQLAPIENDPOINTOUTPUT
	API_SHEOUTDEV_GRAPHQLAPIIDOUTPUT
	API_SHEOUTDEV_ORDERITEMTABLE_ARN
	API_SHEOUTDEV_ORDERITEMTABLE_NAME
	API_SHEOUTDEV_ORDERTABLE_ARN
	API_SHEOUTDEV_ORDERTABLE_NAME
	AUTH_SHEOUT8C751B02_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
  ANALYTICS_SHEOUTDEV_ID
  ANALYTICS_SHEOUTDEV_REGION
  API_SHEOUTDEV_GRAPHQLAPIIDOUTPUT
  API_SHEOUTDEV_ORDERITEMTABLE_ARN
  API_SHEOUTDEV_ORDERITEMTABLE_NAME
  API_SHEOUTDEV_ORDERTABLE_ARN
  API_SHEOUTDEV_ORDERTABLE_NAME
  ENV
  REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
  API_SHEOUTDEV_GRAPHQLAPIIDOUTPUT
  API_SHEOUTDEV_ORDERITEMTABLE_ARN
  API_SHEOUTDEV_ORDERITEMTABLE_NAME
  API_SHEOUTDEV_ORDERTABLE_ARN
  API_SHEOUTDEV_ORDERTABLE_NAME
  ENV
  REGION
Amplify Params - DO NOT EDIT */

var AWS = require("aws-sdk")
const axios = require("axios")
const urlParse = require("url").URL
const {  updateOrder } = require('./graphqlApi')
const graphqlUrl = process.env.API_SHEOUTDEV_GRAPHQLAPIENDPOINTOUTPUT
const graphqlHost = new urlParse(graphqlUrl).hostname.toString()
const region = process.env.REGION
const awsPinpoint = new AWS.Pinpoint({
  region: process.env.ANALYTICS_SHEOUTDEV_REGION
})

exports.handler = async (event) => {
  //eslint-disable-line
  console.log(JSON.stringify(process.env))
  console.log(process.env.projectId)
  console.log(JSON.stringify(event, null, 2))
  const insertRecords = event.Records.filter(record => record.eventName === "INSERT")
  if  (insertRecords && insertRecords.length > 0) {
    const insertRecord = insertRecords[0]
    await sendEmail(insertRecord.dynamodb.NewImage.owner_email.S, insertRecord.dynamodb.NewImage.id.S)
  }
  
  return Promise.resolve('Successfully processed DynamoDB record')
}

const sendEmail = async (userEmail, orderId) => {
  try {
    const response = await awsPinpoint.sendMessages({
      ApplicationId: process.env.ANALYTICS_SHEOUTDEV_ID,
      MessageRequest: {
        Addresses: {
          [userEmail]: {
            ChannelType: 'EMAIL'
          }
        },
        MessageConfiguration: {
          EmailMessage: {
            FromAddress: 'tomerk@get-grin.com',
            SimpleEmail: {
              Subject: {
                Data: `Asos order Confirmation no: ${orderId}`,
                Charset: "UTF-8"
              },
              TextPart: {
                Charset: "UTF-8",
                Data: "Congrats!",
              },

            }
          }
        }
      }
    }).promise()
    console.log(JSON.stringify(response))
    const updatedInDbResponse = await updateInDb(orderId)
  } catch (e) {
    console.log(e.stack)
  }
  
}

const updateInDb = async (orderId) => {
  try {
      console.log(orderId)
      let qraphqlRequest = new AWS.HttpRequest(graphqlUrl, region)
      qraphqlRequest.headers.host = graphqlHost
      qraphqlRequest.headers['Content-Type'] = 'multipart/form-data'
      qraphqlRequest.body = JSON.stringify({
          query: updateOrder,
          variables: {
              input: {
                id: orderId,
                notification_sent: true
              }
          }
      })
      const signer = new AWS.Signers.V4(qraphqlRequest, 'appsync', true)
      signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate())
      const response = await axios({
          method: 'POST',
          url: graphqlUrl,
          data: qraphqlRequest.body,
          headers: qraphqlRequest.headers
      })
      console.log(response.data)
      return response.data
  } catch (e) {
      throw new Error(`graphql response error: ${e.stack}`)
  }
}