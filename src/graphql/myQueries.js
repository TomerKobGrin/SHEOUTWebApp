export const listOrders = /* GraphQL */ `
  query ListOrders {
    listOrders {
      items {
        id
        items {
          items {
            order_id
            item_id
            owner
            title
            price
            image
            count
          }
        }
        notification_sent
        owner_email
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
    listOrderItems {
      nextToken
    }
  }
  
`;