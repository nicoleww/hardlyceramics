export const GET_ALL_QUERY = `
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

export const GET_ONE_QUERY = `
  query getOne($slug: String!){
    products:(filters: {slug: {eq: $slug}}){
      data{
        attributes{
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
