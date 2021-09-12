const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          order_id
          item_id
          owner
          title
          price
          image
          count
          createdAt
          updatedAt
        }
        nextToken
      }
      owner_email
      owner
      createdAt
      updatedAt
    }
  }
`
const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          order_id
          item_id
          owner
          title
          price
          image
          count
          createdAt
          updatedAt
        }
        nextToken
      }
      owner_email
      owner
      createdAt
      updatedAt
    }
  }
`

const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      id
      order_id
      item_id
      owner
      title
      price
      image
      count
      createdAt
      updatedAt
    }
  }
`

module.exports = {
    createOrderItem,
    createOrder,
    updateOrder
}