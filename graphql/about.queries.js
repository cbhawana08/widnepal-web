import gql from 'graphql-tag';

export const POSTS = gql`
  query Posts {
    posts (where: {categoryName: "about-us"}) {
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
    mediaItems (where: {categoryName: "about-us"}) {
      nodes {
        mediaDetails {
          file
        }
      }
    }
  }
`;

export const ABOUT_US_CONTENT = gql`
query MyQuery {
  abouts {
    edges {
      node {
        aboutId
        about_us_page {
          page
          pageTitle
          pageContent
          learnAboutUs
          insertOption
          introduction
          member {
            description
            organizationName
            logo {
              mediaItemUrl
            }
          }
          socialMediaLinksAndEmail {
            email
            facebook
            linkedin
            twitter
            website
          }
        }
      }
    }
  }
}

`
export const ABOUT_US_CONTENT_ERROR = {
  error: "<div><div><h2>ERROR: Detail is not available</h2></div><div>Update CMS (Add a new item in '<b>about</b>' section).</div></div>",
}
