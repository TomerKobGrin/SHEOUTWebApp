/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
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
`;
export const updateOrder = /* GraphQL */ `
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
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
`;
export const createOrderItem = /* GraphQL */ `
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
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
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
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
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
`;
