/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items {
          nextToken
        }
        owner_email
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
