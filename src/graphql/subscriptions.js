/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String!) {
    onCreateOrder(owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String!) {
    onUpdateOrder(owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String!) {
    onDeleteOrder(owner: $owner) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem($owner: String!) {
    onCreateOrderItem(owner: $owner) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem($owner: String!) {
    onUpdateOrderItem(owner: $owner) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem($owner: String!) {
    onDeleteOrderItem(owner: $owner) {
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
