import gql from 'graphql-tag';

export const POSTS = gql`
  query Blogs {
    posts (where: {categoryName: "blog"}) {
      edges {
        node {
          id
          title
          slug
          content
        }
      }
    }
  }
`;

export const MEDIA = gql`
  query Posts {
    mediaItems (where: {categoryName: "blog"}) {
      nodes {
        mediaDetails {
          file
        }
      }
    }
  }
`;

export const POST_WITH_SLUG = (slug) => gql`
  query Blogs {
    posts (where: {categoryName: "blog", name: "${slug}"}) {
      edges {
        node {
          id
          title
          slug
          content
        }
      }
    }
  }
`;
