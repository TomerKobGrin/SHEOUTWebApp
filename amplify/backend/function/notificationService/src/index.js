/* Amplify Params - DO NOT EDIT
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

const awsPinpoint = new AWS.Pinpoint({
  region: process.env.ANALYTICS_SHEOUTDEV_REGION
})

exports.handler = async (event) => {
  //eslint-disable-line
  console.log(JSON.stringify(process.env))
  console.log(process.env.projectId)
  console.log(JSON.stringify(event, null, 2))
  const insertRecord = event.Records.filter(record => record.eventName === "INSERT")[0]
  
  await sendEmail(insertRecord.dynamodb.NewImage.owner_email.S, insertRecord.dynamodb.NewImage.id.S)
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
  } catch (e) {
    console.log(e.stack)
  }
  
}