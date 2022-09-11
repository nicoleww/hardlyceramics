export const PRODUCTS_QUERY = `
query {
    products {
      data {
        attributes {
          title
          brief
          description
          price
          slug
          images {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;
