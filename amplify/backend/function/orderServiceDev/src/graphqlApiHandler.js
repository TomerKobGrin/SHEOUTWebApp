var AWS = require("aws-sdk")
const axios = require("axios")
const urlParse = require("url").URL
const { createOrder, createOrderItem, updateOrder } = require('./graphqlApi')
const graphqlUrl = process.env.API_SHEOUTDEV_GRAPHQLAPIENDPOINTOUTPUT
const graphqlHost = new urlParse(graphqlUrl).hostname.toString()
const region = process.env.REGION

const GRAPHQL_OPERATIONS = {
    CREATE_ORDER: async (owner, owner_email) =>
        proccessGraphqlRequest({ owner, owner_email }, createOrder),
    CREATE_ORDER_ITEM: async (order_id, item_id, owner, title, price, count, image) =>
        proccessGraphqlRequest({ order_id, item_id, owner, title, price, count, image }, createOrderItem)
}

const proccessGraphqlRequest = async (input, query) => {
    try {
        console.log(JSON.stringify(input))
        let qraphqlRequest = new AWS.HttpRequest(graphqlUrl, region)
        qraphqlRequest.headers.host = graphqlHost
        qraphqlRequest.headers['Content-Type'] = 'multipart/form-data'
        qraphqlRequest.body = JSON.stringify({
            query: query,
            variables: {
                input
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

module.exports = GRAPHQL_OPERATIONS